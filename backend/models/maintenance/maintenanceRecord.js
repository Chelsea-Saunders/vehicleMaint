const records = {
    'vin': {
        vin: '',
        last_oil_chg: '',
        tire_pressure: '',
        tire_rotation: '', 
        tranny_flush: '', 
        sparkplugs: '',
        coolant: '',
        wiper_fluid: '',
        light_check: '',
        air_filter: '',
        fuel_filter: '',
        breaks: '',
        belts_hoses: '',
        steering_suspension: '',
        exhaust: ''
    },
    'vin': {
        vin: '',
        oil_change: '',
        tire_pressure: '',
        tire_rotation: '', 
        tranny_flush: '', 
        sparkplugs: '',
        coolant: '',
        wiper_fluid: '',
        light_check: '',
        air_filter: '',
        fuel_filter: '',
        breaks: '',
        belts_hoses: '',
        steering_suspension: '',
        exhaust: ''
    }
};

const getRecordsByVin = (vin) => {
    return records[vin] || null;
};

const getSortedRecords = (sortBy) => {
    const allowedFields = [
        'vin', 
        'oil_change', 
        'breaks', 
        'tire_rotation'
    ];

    const validSortBy = allowedFields.includes(sortBy)
        ? sortBy
        : 'vin';

    const recordsArray = [];

    for (const key in records) {
        recordsArray.push({
            ...records[key],
            id: key,
        });
    }

    recordsArray.sort((a, b) => {
        return a[validSortBy].localeCompare(
            b[validSortBy]
        );
    });

    return recordsArray;
};

export { getRecordsByVin, getSortedRecords };