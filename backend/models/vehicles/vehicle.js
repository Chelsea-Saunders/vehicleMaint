const vehicle = {
    'title': {
        title: '',
        brand: '',
        vin: '', 
        color: '', 
        year: '', 
        mileage: '',
    },
    'title': {
        title: '',
        brand: '',
        vin: '', 
        color: '', 
        year: '', 
        mileage: '',
    }
}

const getVehicleByVin = (title) => {
    return vehicle[title] || null;
};

const getSortedVehicles = (sortBy) => {
    const allowedFields = [
        'title', 
        'brand', 
        'year', 
        'mileage'
    ];

    const validSortBy = allowedFields.includes(sortBy)
        ? sortBy
        : 'title';

    const vehicleArray = [];

    for (const key in vehicle) {
        vehicleArray.push({

        })
    }

    vehicleArray.sort((a, b) => {
        return a[validSortBy].localeCompare(
            b[validSortBy]
        );
    });

    return vehicleArray;
};

export { getVehicleByVin, getSortedVehicles };