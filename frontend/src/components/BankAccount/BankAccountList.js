import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BankAccountList = ({ onEdit }) => {
    const [accounts, setAccounts] = useState([]);

    const fetchAccounts = () => {
        axios.get('http://localhost:5000/api/bankaccounts')
            .then(res => setAccounts(res.data))
            .catch(error => console.error('Error fetching accounts:', error));
    };

    useEffect(() => {
        fetchAccounts();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this account?')) {
            axios.delete(`http://localhost:5000/api/bankaccounts/${id}`)
                .then(fetchAccounts)
                .catch(error => console.error('Error deleting account:', error));
        }
    };

    return (
        <div style={{ 
            padding: '20px',
            margin: '20px auto',
            maxWidth: '1000px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ 
                marginBottom: '20px', 
                color: '#333',
                fontSize: '1.5rem',
                fontWeight: '600'
            }}>
                Bank Accounts
            </h2>
            
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
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Account No</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Bank Name</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>NGO ID</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(account => (
                            <tr key={account.Account_No} style={{ 
                                borderBottom: '1px solid #eee',
                                ':hover': {
                                    backgroundColor: '#f9f9f9'
                                }
                            }}>
                                <td style={{ padding: '12px 8px' }}>{account.Account_No}</td>
                                <td style={{ padding: '12px 8px' }}>{account.Bank_Name}</td>
                                <td style={{ padding: '12px 8px' }}>{account.NGO_ID}</td>
                                <td style={{ padding: '12px 8px' }}>
                                    <button 
                                        onClick={() => onEdit(account)}
                                        style={{
                                            padding: '6px 12px',
                                            marginRight: '8px',
                                            backgroundColor: '#4CAF50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(account.Account_No)}
                                        style={{
                                            padding: '6px 12px',
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
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

export default BankAccountList;