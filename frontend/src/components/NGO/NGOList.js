// frontend/src/components/NGO/NGOList.js
import React from 'react';
import axios from 'axios';

const NGOList = ({ ngos, fetchNGOs, selectNGO }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/ngos/${id}`);
        fetchNGOs();
    };

    return (
        <table>
            <thead>
                <tr><th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Actions</th></tr>
            </thead>
            <tbody>
                {ngos.map((ngo) => (
                    <tr key={ngo.NGO_ID}  className="-row">
                        <td>{ngo.NGO_ID}</td>
                        <td>{ngo.Name}</td>
                        <td>{ngo.Phone}</td>
                        <td>{ngo.Email}</td>
                        <td>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={() => selectNGO(ngo)}>Edit</button>
                                <button onClick={() => handleDelete(ngo.NGO_ID)}>Delete</button>
                            </div>
                        </td>


                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NGOList;
