import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventForm = ({ event, onSave }) => {
    const [formData, setFormData] = useState({
        Event_ID: '',
        Name: '',
        Date: '',
        Location: '',
        NGO_ID: ''
    });

    useEffect(() => {
        if (event) {
            // Populate the form if we are editing an event
            setFormData({
                Event_ID: event.Event_ID,
                Name: event.Name,
                Date: event.Date,
                Location: event.Location,
                NGO_ID: event.NGO_ID
            });
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.Event_ID) {
            // Update event if Event_ID exists
            axios.put(`http://localhost:5000/api/events/${formData.Event_ID}`, formData)
                .then(() => {
                    onSave();
                    setFormData({
                        Event_ID: '',
                        Name: '',
                        Date: '',
                        Location: '',
                        NGO_ID: ''
                    });
                })
                .catch(error => console.error('Error updating event:', error));
        } else {
            // Add new event if Event_ID doesn't exist
            axios.post('http://localhost:5000/api/events', formData)
                .then(() => {
                    onSave();
                    setFormData({
                        Event_ID: '',
                        Name: '',
                        Date: '',
                        Location: '',
                        NGO_ID: ''
                    });
                })
                .catch(error => console.error('Error adding event:', error));
        }
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>{formData.Event_ID ? 'Edit Event' : 'Add Event'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Event_ID"
                    value={formData.Event_ID}
                    onChange={handleChange}
                    placeholder="Event ID"
                    required
                    disabled={formData.Event_ID !== ''}
                />
                <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Event Name"
                    required
                />
                <input
                    type="datetime-local"
                    name="Date"
                    value={formData.Date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Location"
                    value={formData.Location}
                    onChange={handleChange}
                    placeholder="Event Location"
                    required
                />
                <input
                    type="text"
                    name="NGO_ID"
                    value={formData.NGO_ID}
                    onChange={handleChange}
                    placeholder="NGO ID"
                    required
                />
                <button type="submit">{formData.Event_ID ? 'Update' : 'Add'} Event</button>
            </form>
        </div>
    );
};

export default EventForm;
