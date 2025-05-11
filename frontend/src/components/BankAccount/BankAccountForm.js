import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BankAccountForm = ({ account, onSave }) => {
    const [formData, setFormData] = useState({ Account_No: '', Bank_Name: '', NGO_ID: '' });

    useEffect(() => {
        if (account) {
            setFormData(account);
        }
    }, [account]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (account) {
            axios.put(`http://localhost:5000/api/bankaccounts/${account.Account_No}`, formData).then(onSave);
        } else {
            axios.post('http://localhost:5000/api/bankaccounts', formData).then(onSave);
        }
        setFormData({ Account_No: '', Bank_Name: '', NGO_ID: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{account ? 'Edit' : 'Add'} Bank Account</h2>
            <input
                type="text"
                name="Account_No"
                placeholder="Account Number"
                value={formData.Account_No}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="Bank_Name"
                placeholder="Bank Name"
                value={formData.Bank_Name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="NGO_ID"
                placeholder="NGO ID"
                value={formData.NGO_ID}
                onChange={handleChange}
                required
            />
            <button type="submit">{account ? 'Update' : 'Add'} Bank Account</button>
        </form>
    );
};

export default BankAccountForm;
