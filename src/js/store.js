module.exports = {
    state: {
        count: 121,
        currentLocation: 0,
        locations: [
            {
                id: 0,
                name: "Northwest Farm",
                venues: [
                    {
                        id: 0,
                        name: "Aquarium 1",
                        devices: [
                            {
                                id: 0,
                                name: "Aquarium Filter"
                            },
                            {
                                id: 1,
                                name: "Automatic Fish Feeder"
                            },
                            {
                                id: 2,
                                name: "Indoor Thermometer"
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Aquarium 2",
                        devices: [
                            {
                                id: 0,
                                name: "AquaLife Hub",
                                reading: "ON"
                            },
                            {
                                id: 1,
                                name: "Aquarium Filter",
                                reading: "ON"
                            },
                            {
                                id: 2,
                                name: "Water Thermometer"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Aquarium 3",
                        devices: [
                            {
                                id: 0,
                                name: "Aquarium Filter"
                            },
                            {
                                id: 1,
                                name: "Automatic Fish Feeder",
                                status: "Idle"
                            },
                            {
                                id: 2,
                                name: "Indoor Thermometer",
                                reading: "24\xB0C"
                            },
                            {
                                id: 3,
                                name: "Water Thermometer",
                                reading: "26\xB0C"
                            },
                            {
                                id: 4,
                                name: "Indoor Thermostat",
                                status: "Connection Problem"
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Large Pond",
                        devices: [
                            {
                                id: 0,
                                name: "Automatic Fish Feeder 1",
                                status: "Idle"
                            },
                            {
                                id: 1,
                                name: "Automatic Fish Feeder 2",
                                status: "Powered Off"
                            },
                            {
                                id: 2,
                                name: "Barometer"
                            },
                            {
                                id: 3,
                                name: "Chemical Analyzer"
                            },
                            {
                                id: 4,
                                name: "Pond Filter"
                            }
                        ]
                    }
                ]
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