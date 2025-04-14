import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Header from './Header';
import Rightsection from './Rightsection';
import Cardsummary from './Cardsummary';
import ExpenseChart from './Expensechart';
import Historytable from './Historytable';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="dashboard-container">
            <Sidebar />

            <div className="dashboard-main">
                <div className="dashboard-header">
                    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>

                <div className="dashboard-content">
                    <div className="dashboard-inner">
                        <ExpenseChart />
                        <Historytable searchTerm={searchTerm} />
                    </div>
                </div>
            </div>

            <Rightsection />
        </div>
    );
};

export default Dashboard;
