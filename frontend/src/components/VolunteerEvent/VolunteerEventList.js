import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VolunteerEventList = ({ onEdit }) => {
    const [volunteerEvents, setVolunteerEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/volunteer-events')
            .then(response => {
                setVolunteerEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching volunteer events:', error);
            });
    }, []);

    const handleDelete = (volunteerId, eventId) => {
        if (window.confirm('Are you sure you want to delete this volunteer event?')) {
            axios.delete(`http://localhost:5000/api/volunteer-events/${volunteerId}/${eventId}`)
                .then(() => {
                    setVolunteerEvents(prev => prev.filter(ve => 
                        ve.Volunteer_ID !== volunteerId || ve.Event_ID !== eventId
                    ));
                })
                .catch(error => console.error('Error deleting volunteer event:', error));
        }
    };

    return (
        <div style={{ 
            padding: '20px',
            margin: '20px auto',
            maxWidth: '800px',
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
                Volunteer Event List
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
                <table style={{ 
                    width: '100%',
                    borderCollapse: 'collapse'
                }}>
                    <thead>
                        <tr style={{ 
                            backgroundColor: '#f5f5f5',
                            borderBottom: '2px solid #ddd'
                        }}>
                            <th style={{ padding: '12px 8px', textAlign: 'left', minWidth: '120px' }}>Volunteer ID</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left', minWidth: '120px' }}>Event ID</th>
                            <th style={{ padding: '12px 8px', textAlign: 'left', minWidth: '150px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteerEvents.map(volunteerEvent => (
                            <tr 
                                key={`${volunteerEvent.Volunteer_ID}-${volunteerEvent.Event_ID}`}
                                style={{ 
                                    borderBottom: '1px solid #eee',
                                    ':hover': {
                                        backgroundColor: '#f9f9f9'
                                    }
                                }}
                            >
                                <td style={{ padding: '12px 8px' }}>{volunteerEvent.Volunteer_ID}</td>
                                <td style={{ padding: '12px 8px' }}>{volunteerEvent.Event_ID}</td>
                                <td style={{ padding: '12px 8px' }}>
                                    <button 
                                        onClick={() => onEdit && onEdit(volunteerEvent)}
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
                                        onClick={() => handleDelete(volunteerEvent.Volunteer_ID, volunteerEvent.Event_ID)}
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

export default VolunteerEventList;