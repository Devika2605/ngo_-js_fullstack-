import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamList = ({ onEdit }) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = () => {
        axios.get('http://localhost:5000/api/teams')
            .then(response => {
                setTeams(response.data);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/teams/${id}`).then(() => fetchTeams());
    };

    return (
        <div style={{ margin: '0 auto', padding: '20px', maxWidth: '1000px' }}>
            <h2>Team List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Team ID</th>
                        <th>Team Name</th>
                        <th>Volunteer ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.Team_ID}>
                            <td>{team.Team_ID}</td>
                            <td>{team.Team_Name}</td>
                            <td>{team.Volunteer_ID}</td>
                            <td>
                                <button onClick={() => onEdit(team)}>Edit</button>
                                <button onClick={() => handleDelete(team.Team_ID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamList;
