import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonationList = ({ onEdit }) => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Fetch all donations from the backend API
        axios.get('http://localhost:5000/api/donations')
            .then(response => {
                setDonations(response.data);
            })
            .catch(error => {
                console.error('Error fetching donations:', error);
            });
    }, []);

    const handleEdit = (donation) => {
        onEdit(donation);  // Pass donation data to parent (DonationPage)
    };

    return (
        <div style={{ 
            padding: '20px',
            margin: '20px auto',
            maxWidth: '1200px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Donation List</h2>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ 
                    width: '100%',
                    borderCollapse: 'collapse',
                    minWidth: '600px'
                }}>
                    <thead>
                        <tr style={{ 
                            backgroundColor: '#f5f5f5',
                            borderBottom: '2px solid #ddd'
                        }}>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Donation ID</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Amount</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Date</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Donor Name</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>NGO ID</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map(donation => (
                            <tr key={donation.Donation_ID} style={{ 
                                borderBottom: '1px solid #eee',
                                '&:hover': {
                                    backgroundColor: '#f9f9f9'
                                }
                            }}>
                                <td style={{ padding: '12px 8px' }}>{donation.Donation_ID}</td>
                                <td style={{ padding: '12px 8px' }}>{donation.Amount}</td>
                                <td style={{ padding: '12px 8px' }}>{new Date(donation.Date).toLocaleDateString()}</td>
                                <td style={{ padding: '12px 8px' }}>{donation.Donor_Name}</td>
                                <td style={{ padding: '12px 8px' }}>{donation.NGO_ID}</td>
                                <td style={{ padding: '12px 8px' }}>
                                    <button 
                                        onClick={() => handleEdit(donation)}
                                        style={{
                                            padding: '6px 12px',
                                            marginRight: '8px',
                                            backgroundColor: '#4CAF50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        style={{
                                            padding: '6px 12px',
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonationList;