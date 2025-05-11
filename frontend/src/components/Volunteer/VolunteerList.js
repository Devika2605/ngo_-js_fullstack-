import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VolunteerList = ({ refreshFlag }) => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/volunteers')
            .then(res => setVolunteers(res.data))
            .catch(err => console.error('Error fetching volunteers:', err));
    }, [refreshFlag]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/volunteers/${id}`);
        setVolunteers(volunteers.filter(v => v.Volunteer_ID !== id));
    };

    return (
        <div style={{
            padding: '20px',
            maxWidth: '1000px',
            margin: 'auto',
            background: 'transparent'
        }}>
            <h3 style={{ marginBottom: '15px' }}>Volunteer List</h3>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: 'transparent'
            }}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Age</th>
                        <th style={thStyle}>Phone</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map(v => (
                        <tr key={v.Volunteer_ID}>
                            <td style={tdStyle}>{v.Volunteer_ID}</td>
                            <td style={tdStyle}>{v.Name}</td>
                            <td style={tdStyle}>{v.Age}</td>
                            <td style={tdStyle}>{v.Phone}</td>
                            <td style={tdStyle}>{v.Email}</td>
                            <td style={tdStyle}>
                                <button onClick={() => handleDelete(v.Volunteer_ID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const thStyle = {
    borderBottom: '2px solid #ccc',
    textAlign: 'left',
    padding: '8px'
};

const tdStyle = {
    borderBottom: '1px solid #ddd',
    padding: '8px'
};

export default VolunteerList;
