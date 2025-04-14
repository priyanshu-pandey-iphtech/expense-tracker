import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import Table from './Table';

const Cardsummary = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const summaryCards = [
        {
            title: "Add New Transaction",
            icon: <FiPlus className="text-purple-600" />,
        },
    ];

    return (
        <>
            <div className="summary-grid">
                {summaryCards.map((card, index) => (
                    <div
                        key={index}
                        className="summary-card"
                        onClick={handleCardClick}
                    >
                        <div className="summary-icon">
                            {card.icon}
                        </div>
                        <div className="summary-title">
                            {card.title}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="custom-modal">
                    <div className="modal-content">
                        <button
                            onClick={handleCloseModal}
                            className="modal-close"
                        >
                            &times;
                        </button>
                        <Table />
                    </div>
                </div>
            )}
        </>
    );
};

export default Cardsummary;
