import React, { useContext } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from '../Component/Themecontext';
import { Link } from 'react-router-dom';



const Right_header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="right-header">
            <button onClick={toggleTheme} className="theme-toggle">
                {theme === "dark" ? (
                    <FaSun className="icon sun" />
                ) : (
                    <FaMoon className="icon moon" />
                )}
            </button>
            <Link to="/">
                <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    alt="Profile"
                    className="profile-img"
                />
            </Link>
        </div>
    );
};

export default Right_header;

