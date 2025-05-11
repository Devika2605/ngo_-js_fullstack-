// controllers/ngoController.js

const { Ngo } = require('../models');

const getNgos = async (req, res) => {
    try {
        const ngos = await Ngo.findAll(); // Fetch all NGOs from the DB
        res.json(ngos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const addNgo = async (req, res) => {
    try {
        const { name, address, phone, email } = req.body;
        const newNgo = await Ngo.create({ name, address, phone, email });
        res.status(201).json(newNgo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const updateNgo = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, phone, email } = req.body;
        const ngo = await Ngo.findByPk(id);
        if (!ngo) {
            return res.status(404).send('NGO not found');
        }
        ngo.name = name;
        ngo.address = address;
        ngo.phone = phone;
        ngo.email = email;
        await ngo.save();
        res.json(ngo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const deleteNgo = async (req, res) => {
    try {
        const { id } = req.params;
        const ngo = await Ngo.findByPk(id);
        if (!ngo) {
            return res.status(404).send('NGO not found');
        }
        await ngo.destroy();
        res.send('NGO deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = { getNgos, addNgo, updateNgo, deleteNgo };
