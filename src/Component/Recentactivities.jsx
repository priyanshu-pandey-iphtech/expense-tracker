import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const getEmoji = (company) => {
    const map = {
        Tesla: '⚡',
        Apple: '',
        Meta: '∞',
        Adobe: '🅰️',
    };
    return map[company] || '🧾';
};

const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});

const Recentactivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('/data/expense_tracker_dataset.csv')
            .then((res) => res.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const sorted = result.data.sort((a, b) => new Date(b.Date) - new Date(a.Date));
                        setActivities(sorted.slice(0, 5));
                    },
                });
            });
    }, []);

    return (
        <div className="recent-activities">
            <h3 className="recent-title">Recent Activities</h3>
            <p className="recent-date">{today}</p>
            <div className="recent-scroll">
                <ul className="recent-list">
                    {activities.map((activity, index) => (
                        <li key={index} className="recent-item">
                            <span className="recent-emoji">{getEmoji(activity.Company)}</span>
                            <div className="recent-info">
                                <p className="recent-company">{activity.Company}</p>
                                <p className="recent-time">{activity.Date}</p>
                            </div>
                            <div className="recent-price">
                                {activity.Price} INR
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Recentactivities;
