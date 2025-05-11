import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VolunteerEventForm = ({ link, onSave }) => {
    const [formData, setFormData] = useState({
        Volunteer_ID: '',
        Event_ID: ''
    });

    useEffect(() => {
        if (link) {
            setFormData({
                Volunteer_ID: link.Volunteer_ID,
                Event_ID: link.Event_ID
            });
        }
    }, [link]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (link) {
            // Edit mode
            axios.put(`http://localhost:5000/api/volunteer-events/${link.Volunteer_ID}/${link.Event_ID}`, formData)
                .then(() => {
                    onSave();
                    setFormData({ Volunteer_ID: '', Event_ID: '' });
                });
        } else {
            // Add mode
            axios.post('http://localhost:5000/api/volunteer-events', formData)
                .then(() => {
                    onSave();
                    setFormData({ Volunteer_ID: '', Event_ID: '' });
                });
        }
    };

    return (
        <div>
            <h2>{link ? 'Edit Volunteer Event' : 'Add Volunteer Event'}</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    name="Volunteer_ID"
                    placeholder="Volunteer ID"
                    value={formData.Volunteer_ID}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Event_ID"
                    placeholder="Event ID"
                    value={formData.Event_ID}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{link ? 'Update' : 'Add'} Link</button>
            </form>
        </div>
    );
};

export default VolunteerEventForm;
