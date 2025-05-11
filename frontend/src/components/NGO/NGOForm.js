// frontend/src/components/NGO/NGOForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NGOForm = ({ fetchNGOs, selectedNGO, clearSelection }) => {
    const [form, setForm] = useState({
        NGO_ID: '', Name: '', Address: '', Phone: '', Email: ''
    });

    useEffect(() => {
        if (selectedNGO) setForm(selectedNGO);
    }, [selectedNGO]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedNGO) {
            await axios.put(`http://localhost:5000/api/ngos/${form.NGO_ID}`, form);
        } else {
            await axios.post('http://localhost:5000/api/ngos', form);
        }
        fetchNGOs();
        setForm({ NGO_ID: '', Name: '', Address: '', Phone: '', Email: '' });
        clearSelection();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="NGO_ID" placeholder="ID" value={form.NGO_ID} onChange={handleChange} required disabled={selectedNGO} />
            <input name="Name" placeholder="Name" value={form.Name} onChange={handleChange} required />
            <input name="Address" placeholder="Address" value={form.Address} onChange={handleChange} required />
            <input name="Phone" placeholder="Phone" value={form.Phone} onChange={handleChange} required />
            <input name="Email" placeholder="Email" value={form.Email} onChange={handleChange} required />
            <button type="submit">{selectedNGO ? 'Update' : 'Add'} NGO</button>
        </form>
    );
};

export default NGOForm;
