// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NGOPage from './pages/NGOPage';
import DonationPage from './pages/DonantionPage';
import VolunteerPage from './pages/VolunteerPage';
import EventPage from './pages/EventPage';
import TeamPage from './pages/TeamPage';
import VolunteerEventPage from './pages/VolunteerEventPage';
import BankAccountPage from './pages/BankAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ngo" element={<NGOPage />} />
        <Route path="/donations" element={<DonationPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/volunteers" element={<VolunteerPage />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/volunteer-events" element={<VolunteerEventPage />} />
        <Route path="/bankaccounts" element={<BankAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
