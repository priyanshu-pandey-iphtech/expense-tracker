import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const AddTransactionForm = () => {
    const navigate = useNavigate();

    const generateTransactionId = () => {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        return `TXN${randomNumber}`;
    };

    const [formData, setFormData] = useState({
        companyName: '',
        date: '',
        id: generateTransactionId(),
        transactionType: '',
        transactionMode: '',
        price: '',
        status: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const existingTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        const updatedTransactions = [...existingTransactions, formData];
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

        console.log('Transaction Added:', formData);


        setFormData({
            companyName: '',
            date: '',
            id: generateTransactionId(),
            transactionType: '',
            transactionMode: '',
            price: '',
            status: ''
        });


        navigate('/home');
    };

    const inputClass =
        "block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer";

    const labelClass =
        "absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4";

    return (
        <div className='min-h-screen flex flex-col items-center justify-center py-10 bg-#EFF3FB'>
            <h1 className="add-transaction-heading mb-6">
                Add a new transaction to your records
            </h1>

            <div className="w-[700px] h-[400px] p-6 bg-white rounded-2xl shadow-lg overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder=" "
                        />
                        <label htmlFor="companyName" className={labelClass}>Company Name</label>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative w-1/2">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className={inputClass}
                                placeholder=" "
                                min="1900-01-01"
                                max="2100-12-31"
                            />
                            <label htmlFor="date" className={labelClass}>Date</label>
                        </div>
                        <div className="relative w-1/2">
                            <input
                                type="text"
                                name="id"
                                value={formData.id}
                                readOnly
                                className={`${inputClass} bg-gray-100 cursor-not-allowed`}
                                placeholder=" "
                            />
                            <label htmlFor="id" className={labelClass}>Transaction ID</label>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative w-1/2">
                            <select
                                name="transactionType"
                                value={formData.transactionType}
                                onChange={handleChange}
                                required
                                className={`${inputClass} pt-5`}
                            >
                                <option value="" disabled hidden></option>
                                <option value="Credit">Credit</option>
                                <option value="Debit">Debit</option>
                            </select>
                            <label htmlFor="transactionType" className={labelClass}>Transaction Type</label>
                            <MdOutlineKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 text-xl" />
                        </div>
                        <div className="relative w-1/2">
                            <select
                                name="transactionMode"
                                value={formData.transactionMode}
                                onChange={handleChange}
                                required
                                className={`${inputClass} pt-5`}
                            >
                                <option value="" disabled hidden></option>
                                <option value="UPI">UPI</option>
                                <option value="Card">Card</option>
                                <option value="Cash">Cash</option>
                            </select>
                            <label htmlFor="transactionMode" className={labelClass}>Mode of Payment</label>
                            <MdOutlineKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 text-xl" />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative w-1/2">
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                onKeyDown={(e) => {
                                    if (['e', 'E', '+', '-'].includes(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                required
                                className={inputClass}
                                placeholder=" "
                                min="0"
                            />
                            <label htmlFor="price" className={labelClass}>Price</label>
                        </div>
                        <div className="relative w-1/2">
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                                className={`${inputClass} pt-5`}
                            >
                                <option value="" disabled hidden></option>
                                <option value="Payment Successful">Payment Done</option>
                                <option value="Payment Processing">Payment Pending</option>
                                <option value="Payment Failed">Payment Failed</option>
                            </select>
                            <label htmlFor="status" className={labelClass}>Status</label>
                            <MdOutlineKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 text-xl" />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-1/5 bg-green-700 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTransactionForm;
