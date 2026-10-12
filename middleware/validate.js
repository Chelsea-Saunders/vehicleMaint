const validateVehicle = (req, res, next) => {
    const { title, brand, vin, year } = req.body;
    
    if(!title || !brand || !vin ) {
        return res.status(400).json({ message: 'title, brand and vin are required.' });
    }

    if (year !== undefined && typeof year !== 'number') {
        return res.status(400).json({ message: 'year must be a number.'});
    } 
    next();
};

module.exports = { validateVehicle };