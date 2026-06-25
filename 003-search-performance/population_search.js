// Population
// 2000 → 4588112
// 2001 → 4921215
// ...

const populationData = [];
const populationMap = {};

for (let year = 1; year <= 10000; year++) {
    const population = Math.floor(Math.random() * 1_000_000_000);
    populationData.push({
        year,
        population: population,
    });

    populationMap[year] = population;
}

function linearSearch(year){
    console.time('Linear Search');

    for(const item of populationData){
        if(item.year === year){
            console.timeEnd('Linear Search');
            return item.population;
        }
    }

    console.timeEnd('Linear Search');
    return null;
}

function mapSearch(year){
    console.time('Map Search');

    const population = populationMap[year] || null;
    
    console.timeEnd('Map Search');
    return population;
}

console.log(linearSearch(9999));
console.log(mapSearch(9999));