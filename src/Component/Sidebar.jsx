import React, { useState } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { name: 'Home', icon: <IoHome className="text-2xl" />, path: '/home' },
        { name: 'Add Transaction', icon: <FaPlus className="text-2xl" />, path: '/add_transaction' },
    ];

    return (
        <div className="w-64 h-full p-6 flex flex-col justify-start custom-sidebar shadow-lg">
            <div>
                <Link to="/">
                    <img
                        src="https://www.expensetracker.site/logo.jpg"
                        alt="Logo"
                        className='h-32 w-32 mx-auto rounded-full object-cover'
                    />
                </Link>
                <ul className="space-y-6 mt-10">
                    {menuItems.map(item => (
                        <li
                            key={item.name}
                            className={`flex items-center space-x-4 px-4 py-2 rounded-lg cursor-pointer text-lg 
                            ${location.pathname === item.path
                                    ? 'active-sidebar-item'
                                    : 'hover-sidebar-item'}`}
                        >
                            {item.icon}
                            <Link to={item.path} className="w-full">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
