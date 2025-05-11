import React, { useState } from 'react';
import TeamList from '../components/Team/TeamList';
import TeamForm from '../components/Team/TeamForm';

const TeamPage = () => {
    const [team, setTeam] = useState(null);

    const handleEdit = (team) => {
        setTeam(team); // Pass the full team object
    };

    const handleSave = () => {
        setTeam(null); // Reset the form after save
    };

    return (
        <div style={{ marginTop: '30px' }}>
            <TeamForm team={team} onSave={handleSave} />
            <TeamList onEdit={handleEdit} />
        </div>
    );
};

export default TeamPage;
