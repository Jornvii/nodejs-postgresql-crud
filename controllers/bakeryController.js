const Bakery = require('../Bakery');

// Create a new bakery
exports.createBakery = async (req, res) => {
    try {
        const bakery = await Bakery.create(req.body);
        res.status(201).json(bakery);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all bakeries
exports.getBakeries = async (req, res) => {
    try {
        const bakeries = await Bakery.findAll();
        res.status(200).json(bakeries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a bakery by ID
exports.getBakeryById = async (req, res) => {
    try {
        const bakery = await Bakery.findByPk(req.params.id);
        if (!bakery) {
            return res.status(404).json({ message: 'Bakery not found' });
        }
        res.status(200).json(bakery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a bakery
exports.updateBakery = async (req, res) => {
    try {
        const bakery = await Bakery.findByPk(req.params.id);
        if (!bakery) {
            return res.status(404).json({ error: 'Bakery not found' });
        }
        await bakery.update(req.body);
        res.json(bakery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a bakery
exports.deleteBakery = async (req, res) => {
    try {
        const bakery = await Bakery.findByPk(req.params.id);
        if (!bakery) {
            return res.status(404).json({ error: 'Bakery not found' });
        }
        await bakery.destroy();
        res.json({ message: 'Bakery deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
