import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = ({ onEdit }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
            .then(response => setEvents(response.data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/events/${id}`)
            .then(() => {
                setEvents(events.filter(event => event.Event_ID !== id));
            })
            .catch(error => console.error('Error deleting event:', error));
    };

    return (
        <div style={{ margin: '0 50px' }}> {/* Padding added to the event list wrapper */}
            <h2>Event List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Event ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>NGO ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.Event_ID}>
                            <td>{event.Event_ID}</td>
                            <td>{event.Name}</td>
                            <td>{new Date(event.Date).toLocaleDateString()}</td>
                            <td>{event.Location}</td>
                            <td>{event.NGO_ID}</td>
                            <td>
                                <button onClick={() => onEdit(event)}>Edit</button>
                                <button onClick={() => handleDelete(event.Event_ID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventList;
