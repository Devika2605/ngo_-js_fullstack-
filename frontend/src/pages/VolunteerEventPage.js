import React, { useState } from 'react';
import VolunteerEventForm from '../components/VolunteerEvent/VolunteerEventForm';
import VolunteerEventList from '../components/VolunteerEvent/VolunteerEventList';

const VolunteerEventPage = () => {
    const [selectedLink, setSelectedLink] = useState(null);

    const handleSave = () => {
        setSelectedLink(null);
    };

    return (
        <div style={{ marginTop: '30px' }}>
            <VolunteerEventForm link={selectedLink} onSave={handleSave} />
            <VolunteerEventList onEdit={setSelectedLink} />
        </div>
    );
};

export default VolunteerEventPage;
