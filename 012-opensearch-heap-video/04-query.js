const body = {
    size: PAGE_SIZE,
    sort: [{ _id: 'asc' }],
    query: {
        bool: {
            filter: [
                { term: { '_uid.keyword': uid } },
            ],
        },
    },
};