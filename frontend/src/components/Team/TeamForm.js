import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamForm = ({ team, onSave }) => {
    const [formData, setFormData] = useState({
        Team_ID: '',
        Team_Name: '',
        Volunteer_ID: ''
    });

    useEffect(() => {
        if (team) {
            setFormData({
                Team_ID: team.Team_ID,
                Team_Name: team.Team_Name,
                Volunteer_ID: team.Volunteer_ID
            });
        } else {
            setFormData({
                Team_ID: '',
                Team_Name: '',
                Volunteer_ID: ''
            });
        }
    }, [team]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { Team_ID, Team_Name, Volunteer_ID } = formData;

        if (Team_ID) {
            axios.put(`http://localhost:5000/api/teams/${Team_ID}`, { Team_Name, Volunteer_ID })
                .then(() => {
                    onSave();
                    setFormData({ Team_ID: '', Team_Name: '', Volunteer_ID: '' });
                });
        } else {
            axios.post('http://localhost:5000/api/teams', { Team_Name, Volunteer_ID })
                .then(() => {
                    onSave();
                    setFormData({ Team_ID: '', Team_Name: '', Volunteer_ID: '' });
                });
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <h2>{formData.Team_ID ? 'Edit Team' : 'Add Team'}</h2>
            <input
                type="text"
                name="Team_Name"
                placeholder="Team Name"
                value={formData.Team_Name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="Volunteer_ID"
                placeholder="Volunteer ID"
                value={formData.Volunteer_ID}
                onChange={handleChange}
                required
            />
            <button type="submit">{formData.Team_ID ? 'Update' : 'Add'} Team</button>
        </form>
    );
};

export default TeamForm;
