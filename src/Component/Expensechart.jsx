import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-label">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color }} className="tooltip-entry">
                        {entry.name}: {entry.value} INR
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const ExpenseChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('/data/expense_tracker_dataset.csv')
            .then((res) => res.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const monthlyData = {};

                        result.data.forEach(record => {
                            const date = new Date(record["Date"]);
                            const year = date.getFullYear();
                            const month = date.toLocaleString('default', { month: 'short' });

                            const price = parseFloat(record["Price"]);
                            if (isNaN(price)) return;

                            if (!monthlyData[month]) {
                                monthlyData[month] = { month, "2024": 0, "2025": 0 };
                            }

                            if (year === 2024 || year === 2025) {
                                monthlyData[month][year] += price;
                            }
                        });

                        const finalData = Object.values(monthlyData).sort((a, b) =>
                            new Date(`01 ${a.month} 2000`) - new Date(`01 ${b.month} 2000`)
                        );

                        setChartData(finalData);
                    }
                });
            });
    }, []);

    return (
        <div className="expense-chart">
            <h2 className="chart-title">Expense statistics</h2>
            <ResponsiveContainer width="100%" height="90%" className="chart-container">
                <BarChart
                    data={chartData}
                    barSize={8}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <XAxis dataKey="month" axisLine={false} tickLine={false} stroke="#999" />
                    <YAxis axisLine={false} tickLine={false} stroke="#999" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="2024" fill="#2fb57f" radius={[10, 10, 0, 0]} name="2024" />
                    <Bar dataKey="2025" fill="#8b5cf6" radius={[10, 10, 0, 0]} name="2025" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseChart;
