// frontend/src/pages/NGOPage.js
import React, { useState, useEffect } from 'react';
import NGOForm from '../components/NGO/NGOForm';
import NGOList from '../components/NGO/NGOList';
import axios from 'axios';
import '../App.css'; // Make sure global styles are imported

const NGOPage = () => {
    const [ngos, setNgos] = useState([]);
    const [selectedNGO, setSelectedNGO] = useState(null);

    const fetchNGOs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/ngos');
            setNgos(res.data);
        } catch (err) {
            console.error('Error fetching NGOs:', err);
        }
    };

    useEffect(() => {
        fetchNGOs();
    }, []);

    return (
        <div className="container">
            <h2>NGO Management</h2>

            <div className="form-section">
                <NGOForm
                    fetchNGOs={fetchNGOs}
                    selectedNGO={selectedNGO}
                    clearSelection={() => setSelectedNGO(null)}
                />
            </div>

            <div className="list-section">
                <NGOList
                    ngos={ngos}
                    fetchNGOs={fetchNGOs}
                    selectNGO={setSelectedNGO}
                />
            </div>
        </div>
    );
};

export default NGOPage;
