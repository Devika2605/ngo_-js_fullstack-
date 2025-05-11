import React, { useState } from 'react';
import axios from 'axios';

const VolunteerForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        Volunteer_ID: '',
        Name: '',
        Age: '',
        Phone: '',
        Email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/volunteers', formData);
            onSave(); // to trigger list refresh
            setFormData({ Volunteer_ID: '', Name: '', Age: '', Phone: '', Email: '' });
        } catch (error) {
            console.error('Error adding volunteer:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Volunteer</h3>
            <input name="Volunteer_ID" value={formData.Volunteer_ID} onChange={handleChange} placeholder="Volunteer ID" required />
            <input name="Name" value={formData.Name} onChange={handleChange} placeholder="Name" required />
            <input name="Age" type="number" value={formData.Age} onChange={handleChange} placeholder="Age" required />
            <input name="Phone" value={formData.Phone} onChange={handleChange} placeholder="Phone" required />
            <input name="Email" value={formData.Email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Add Volunteer</button>
        </form>
    );
};

export default VolunteerForm;
