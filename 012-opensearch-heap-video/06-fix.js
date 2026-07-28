const body = {
    size: PAGE_SIZE,
    sort: [{ 'id.keyword': 'asc' }],
    query: {
        bool: {
            filter: [
                { term: { '_uid.keyword': uid } },
            ],
        },
    },
};