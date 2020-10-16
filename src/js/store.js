module.exports = {
    state: {
        count: 121,
        currentLocation: 0,
        locations: [
            {
                id: 0,
                name: "Northwest Farm"
            },
            {
                id: 1,
                name: "Laboratory 1"
            },
            {
                id: 2,
                name: "South Farm"
            }
        ],
        name: 'User'
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
};