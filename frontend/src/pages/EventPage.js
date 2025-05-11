import React, { useState } from 'react';
import EventList from '../components/Event/EventList';
import EventForm from '../components/Event/EventForm';

const EventPage = () => {
    const [event, setEvent] = useState(null);

    const handleEdit = (event) => {
        setEvent(event); // Pass the full event object to the form for editing
    };

    const handleSave = () => {
        setEvent(null); // Reset the form after saving
    };

    return (
        <div style={{
            marginTop: '30px',
            padding: '0 20px',  // Padding for space on both sides
            width: '80%', // Adjust width to fit content nicely on the screen
            margin: '0 auto' // Centers the content
        }}>
            <EventForm event={event} onSave={handleSave} />
            <EventList onEdit={handleEdit} />
        </div>
    );
};

export default EventPage;
