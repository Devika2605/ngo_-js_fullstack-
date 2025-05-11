import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    FaHandHoldingHeart,
    FaUsers,
    FaCalendarAlt,
    FaUniversity,
    FaSitemap,
    FaGlobeAmericas
} from 'react-icons/fa';

const Dashboard = () => {
    useEffect(() => {
        const createBubbles = () => {
            const container = document.querySelector('.dashboard-bg');
            if (!container) return;

            // Clear existing bubbles
            document.querySelectorAll('.bubble').forEach(b => b.remove());

            // Create more bubbles (50 instead of 20)
            const bubbleCount = 50;
            const containerWidth = container.offsetWidth;

            for (let i = 0; i < bubbleCount; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';

                // Faster animation (5-15s instead of 10-25s)
                const size = Math.random() * 25 + 5; // 5-30px
                const duration = Math.random() * 10 + 5; // 5-15s 
                const delay = Math.random() * 5;
                const randomX = Math.random() * containerWidth;
                const opacity = Math.random() * 0.7 + 0.3; // 30-100%

                bubble.style.setProperty('--random-x', `${randomX}px`);
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${randomX}px`;
                bubble.style.animationDuration = `${duration}s`;
                bubble.style.animationDelay = `${delay}s`;
                bubble.style.opacity = opacity;

                // Add slight horizontal movement
                if (Math.random() > 0.5) {
                    bubble.style.animationName = 'floatBubbleRight';
                }

                container.appendChild(bubble);
            }
        };

        // Start immediately and refresh every 20s
        createBubbles();
        const interval = setInterval(createBubbles, 20000);

        return () => clearInterval(interval);
    }, []);

    const cards = [
        {
            icon: <FaGlobeAmericas size={45} className="text-success" />,
            title: "NGO Management",
            link: "/ngo"
        },
        {
            icon: <FaHandHoldingHeart size={45} className="text-danger" />,
            title: "Donation Management",
            link: "/donations"
        },
        {
            icon: <FaUniversity size={45} className="text-primary" />,
            title: "Bank Accounts",
            link: "/bankaccounts"
        },
        {
            icon: <FaUsers size={45} className="text-warning" />,
            title: "Volunteer Management",
            link: "/volunteers"
        },
        {
            icon: <FaCalendarAlt size={45} className="text-info" />,
            title: "Event Management",
            link: "/events"
        },
        {
            icon: <FaSitemap size={45} className="text-secondary" />,
            title: "Team Management",
            link: "/teams"
        },
        {
            icon: <FaCalendarAlt size={45} className="text-muted" />,
            title: "Volunteer Events",
            link: "/volunteer-events"
        }
    ];

    return (
        <div className="dashboard-bg py-5">
            <div className="container px-4">
                {/* Header with plant icon */}
                <div className="dashboard-header">
                    <h1 className="display-4 fw-bold">Charity tracker : Smart Database Backbone for NGO Operations</h1>
                    <p className="dashboard-subtitle fw-semibold">
                        A relational database that streamlines how NGOs track donations,
                        manage volunteers, organize events, and handle bank accounts —
                        built for transparency, efficiency, and growth.
                    </p>
                </div>

                {/* 3D Cards Grid */}
                <div className="row g-4">
                    {cards.map((card, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <Link to={card.link} className="text-decoration-none">
                                <div className="dashboard-card">
                                    <div className="card-icon-wrapper">
                                        {card.icon}
                                    </div>
                                    <h5 className="card-title mt-3">{card.title}</h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;