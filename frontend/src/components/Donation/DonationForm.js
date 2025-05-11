import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonationForm = ({ donation, onSave }) => {
    const [formData, setFormData] = useState({
        Donation_ID: '',
        Amount: '',
        Date: '',
        Donor_Name: '',
        NGO_ID: ''
    });

    useEffect(() => {
        if (donation) {
            setFormData(donation);
        }
    }, [donation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (donation) {
            axios.put(`http://localhost:5000/api/donations/${donation.Donation_ID}`, formData).then(onSave);
        } else {
            axios.post('http://localhost:5000/api/donations', formData).then(onSave);
        }
        setFormData({ Donation_ID: '', Amount: '', Date: '', Donor_Name: '', NGO_ID: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{donation ? 'Edit Donation' : 'Add New Donation'}</h3> {/* Conditional message */}
            <input type="text" name="Donation_ID" placeholder="Donation ID" value={formData.Donation_ID} onChange={handleChange} required />
            <input type="number" name="Amount" placeholder="Amount" value={formData.Amount} onChange={handleChange} required />
            <input type="datetime-local" name="Date" value={formData.Date} onChange={handleChange} required />
            <input type="text" name="Donor_Name" placeholder="Donor Name" value={formData.Donor_Name} onChange={handleChange} required />
            <input type="text" name="NGO_ID" placeholder="NGO ID" value={formData.NGO_ID} onChange={handleChange} required />
            <button type="submit">{donation ? 'Update' : 'Add'} Donation</button>
        </form>
    );
};

export default DonationForm;
