import React, { useState } from 'react';
import DonationForm from '../components/Donation/DonationForm';
import DonationList from '../components/Donation/DonationList';

const DonationPage = () => {
    const [editDonation, setEditDonation] = useState(null);

    const handleSave = () => {
        setEditDonation(null);
    };

    return (
        <div style={{ marginTop: '30px' }}>
            <DonationForm donation={editDonation} onSave={handleSave} />
            <DonationList onEdit={setEditDonation} />
        </div>
    );
};

export default DonationPage;
