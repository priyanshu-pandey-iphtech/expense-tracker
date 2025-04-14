import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";

const Historytable = ({ searchTerm }) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('/data/expense_tracker_dataset.csv')
            .then((res) => res.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const csvData = result.data;

                        
                        const localData = JSON.parse(localStorage.getItem('transactions')) || [];

                        
                        const formattedLocalData = localData.map(item => ({
                            Company: item.companyName,
                            Date: item.date,
                            "Transaction ID": item.id,
                            Price: item.price,
                            "Transaction Type": item.transactionType,
                            "Mode Of Payment": item.transactionMode,
                            "Payment Status": item.status
                        }));

                        
                        const combinedData = [...csvData, ...formattedLocalData];
                        const sortedData = combinedData.sort(
                            (a, b) => new Date(b["Date"]) - new Date(a["Date"])
                        );

                        setRecords(sortedData);
                    }
                });
            });
    }, []);

    const filteredRecords = records.filter(record =>
        Object.values(record).some(value =>
            value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="history-table">
            <h2 className="table-title">Transaction History</h2>

            <div className="table-container">
                <div className="table-scroll">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>ID</th>
                                <th>Price [INR]</th>
                                <th>Type</th>
                                <th>MoP</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRecords.map((record, index) => {
                                const status = record["Payment Status"]?.trim().toLowerCase();
                                let statusClass = "", Icon = null;

                                if (status === "payment successful") {
                                    statusClass = "status-success";
                                    Icon = <FaCheckCircle className="status-icon success" />;
                                } else if (status === "payment failed") {
                                    statusClass = "status-failed";
                                    Icon = <FaTimesCircle className="status-icon failed" />;
                                } else if (status === "payment pending" || status === "payment processing" || status === "pending") {
                                    statusClass = "status-pending";
                                    Icon = <FaHourglassHalf className="status-icon pending" />;
                                }

                                return (
                                    <tr key={index}>
                                        <td>{record["Company"]}</td>
                                        <td>{record["Date"]}</td>
                                        <td>{record["Transaction ID"]}</td>
                                        <td>{record["Price"]}</td>
                                        <td>{record["Transaction Type"]}</td>
                                        <td>{record["Mode Of Payment"]}</td>
                                        <td>
                                            <span className={`status-badge ${statusClass}`}>
                                                {Icon}
                                                {status === "payment successful"
                                                    ? "Payment Done"
                                                    : record["Payment Status"]}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="table-footer">
    Showing: <span className="font-semibold">{filteredRecords.length}</span> result{filteredRecords.length !== 1 ? 's' : ''} 
    {searchTerm && (
        <>
            {" "}from <span className="font-semibold">{records.length}</span> total record{records.length !== 1 ? 's' : ''}
        </>
    )}
</div>
        </div>
    );
};

export default Historytable;
