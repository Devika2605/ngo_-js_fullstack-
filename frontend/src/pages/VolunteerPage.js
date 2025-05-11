import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components
import VolunteerForm from '../components/Volunteer/VolunteerForm';
import VolunteerList from '../components/Volunteer/VolunteerList';

// Define a styled container for your page
const PageContainer = styled.div`
    margin-top: 20px; /* Adding top margin */
`;

const VolunteerPage = () => {
    const [refreshFlag, setRefreshFlag] = useState(false);

    const handleSave = () => {
        setRefreshFlag(prev => !prev); // toggle to refresh list
    };

    return (
        <PageContainer> {/* Apply the styled component */}
            <VolunteerForm onSave={handleSave} />
            <VolunteerList refreshFlag={refreshFlag} />
        </PageContainer>
    );
};

export default VolunteerPage;
