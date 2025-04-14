import React from 'react';


const getEmoji = (company) => {
    const map = {
        Uber: '🚗',
        Zoom: '🎥',
        Netflix: '🎬',
        Tesla: '⚡',
        "McDonald's": '🍔',
        IKEA: '🪑',
        ENOC: '⛽',
        Etisalat: '📱',
        Adobe: '🅰️',
    };
    return map[company] || '🧾';
};

const upcoming = [
    { Company: 'Netflix', Date: '2025-04-10', Price: '2249', Note: 'Monthly Subscription' },
    { Company: 'ENOC', Date: '2025-04-12', Price: '1120', Note: 'Fuel Budget' },
    { Company: 'Adobe', Date: '2025-04-15', Price: '6599', Note: 'Creative Cloud Renewal' },
    { Company: 'Etisalat', Date: '2025-04-18', Price: '7200', Note: 'Mobile Bill' },
];

const Upcommingactivities = () => {
    return (
        <div className="upcoming-activities">
            <h3 className="upcoming-title">Upcoming Activities</h3>
            <p className="upcoming-subtext">Scheduled transactions</p>
            <div className="upcoming-scroll">
                <ul className="upcoming-list">
                    {upcoming.map((item, index) => (
                        <li key={index} className="upcoming-item">
                            <div className="upcoming-left">
                                <span className="upcoming-emoji">{getEmoji(item.Company)}</span>
                                <div>
                                    <p className="upcoming-company">{item.Company}</p>
                                    <p className="upcoming-date">{item.Date} – {item.Note}</p>
                                </div>
                            </div>
                            <div className="upcoming-price">
                                {item.Price} INR
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Upcommingactivities;
