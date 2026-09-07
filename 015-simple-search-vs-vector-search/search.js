import { pipeline } from '@xenova/transformers';

const STOPWORDS = new Set([
    'a', 'an', 'the', 'on', 'in', 'of', 'to', 'for',
    'after', 'when', 'i', 'my', 'is', 'and',
]);

const docs = [
    {
        id: 'checkout-timeout.md',
        text: 'Checkout timeout. The order confirmation screen hangs after submit. Error ERROR_504_GATEWAY. Restart checkout-service pods.',
    },
    {
        id: 'card-processor-latency.md',
        text: 'Card processor latency. Checkout feels slow. p99 latency on the card processor.',
    },
    {
        id: 'stripe-webhook-retries.md',
        text: 'Stripe webhook retries. Duplicate card-charge events. Incident INC-4902.',
    },
    {
        id: 'cart-session.md',
        text: 'Cart session expired. Users lose their cart after 30 minutes.',
    },
];

const embeddingCache = new Map();
let extractor = null;

function tokenize(text) {
    return text
        .toLowerCase()
        .split(/[^a-z0-9_]+/)
        .filter((token) => token && !STOPWORDS.has(token));
}

function cosine(a, b) {
    let dot = 0;
    let na = 0;
    let nb = 0;

    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        na += a[i] * a[i];
        nb += b[i] * b[i];
    }

    return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

async function getExtractor() {
    if (!extractor) {
        extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    return extractor;
}

async function embed(text) {
    if (embeddingCache.has(text)) {
        return embeddingCache.get(text);
    }

    const model = await getExtractor();
    const output = await model(text, { pooling: 'mean', normalize: true });
    const vector = Array.from(output.data);
    embeddingCache.set(text, vector);
    return vector;
}

function simpleSearch(query) {
    const queryTokens = tokenize(query);

    return docs.filter((doc) => {
        const docTokens = new Set(tokenize(doc.text));
        return queryTokens.every((token) => docTokens.has(token));
    });
}

async function vectorSearch(query) {
    const queryVector = await embed(query);

    const scored = [];
    for (const doc of docs) {
        const docVector = await embed(doc.text);
        scored.push({
            id: doc.id,
            score: cosine(queryVector, docVector),
        });
    }

    return scored.sort((a, b) => b.score - a.score);
}

async function hybridSearch(query) {
    const seen = new Set();
    const results = [];

    for (const hit of simpleSearch(query)) {
        seen.add(hit.id);
        results.push({ id: hit.id, via: 'keyword' });
    }

    for (const hit of await vectorSearch(query)) {
        if (seen.has(hit.id)) {
            continue;
        }
        seen.add(hit.id);
        results.push({ id: hit.id, via: 'vector', score: hit.score });
    }

    return results;
}

function printSimple(query) {
    const hits = simpleSearch(query);
    console.log(`Query: "${query}"`);
    console.log('');
    console.log('Simple search');
    if (hits.length === 0) {
        console.log('  (no results)');
        return;
    }
    for (const hit of hits) {
        console.log(`  ${hit.id}`);
    }
}

async function printBoth(query) {
    console.log('='.repeat(44));
    console.log(`Query: "${query}"`);
    console.log('');

    const simpleHits = simpleSearch(query);
    console.log('Simple search');
    if (simpleHits.length === 0) {
        console.log('  (no results)');
    } else {
        for (const hit of simpleHits) {
            console.log(`  ${hit.id}`);
        }
    }

    console.log('');
    console.log('Vector search');
    for (const hit of await vectorSearch(query)) {
        console.log(`  ${hit.id.padEnd(28)} ${hit.score.toFixed(3)}`);
    }
    console.log('');
}

async function printHybrid(query) {
    console.log('='.repeat(44));
    console.log(`Query: "${query}"`);
    console.log('');
    console.log('Hybrid search');
    for (const hit of await hybridSearch(query)) {
        if (hit.via === 'keyword') {
            console.log(`  ${hit.id.padEnd(28)} keyword`);
        } else {
            console.log(`  ${hit.id.padEnd(28)} vector   ${hit.score.toFixed(3)}`);
        }
    }
    console.log('');
}

const stage = process.argv[2] || 'keyword';

if (stage === 'keyword') {
    console.log('='.repeat(44));
    printSimple('checkout timeout');
    console.log('');
    console.log('='.repeat(44));
    printSimple('app freezes on payment');
    console.log('');
} else if (stage === 'vector') {
    const sample = await embed(docs[0].text);
    console.log(`Each embedding is ${sample.length} numbers.`);
    console.log('');
    await printBoth('app freezes on payment');
} else if (stage === 'hybrid') {
    await printHybrid('app freezes on payment');
    await printHybrid('ERROR_504_GATEWAY');
} else {
    console.error('Usage: node search.js [keyword|vector|hybrid]');
    process.exit(1);
}
