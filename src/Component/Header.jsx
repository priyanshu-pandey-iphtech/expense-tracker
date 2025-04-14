import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import Right_header from './Right_header';

const Header = ({ searchTerm, setSearchTerm }) => {
    const location = useLocation();
    const pathname = location.pathname;

    const pageTitle =
        pathname === '/'
            ? 'Home'
            : pathname
                .replace('/', '')
                .replace(/-/g, ' ')
                .replace(/_/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());

    return (
        <div className="header-container">
            <h1 className="header-title">{pageTitle}</h1>
            <div className='searchlast'>
                <div className="search-box">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Right_header />
            </div>

        </div>
    );
};

export default Header;
