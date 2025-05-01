import React from 'react'
import "tailwindcss";
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/home');
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-[url('https://plus.unsplash.com/premium_photo-1681469490618-c24cc20bef1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9uZXl8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center bg-no-repeat">

            
            <div className="absolute inset-0 bg-black/60 z-10" />

            
            <div className="relative z-20 bg-transparent p-20 rounded-2xl text-center w-[90%] max-w-md flex flex-col items-center justify-center">
                <img src="https://www.expensetracker.site/logo.jpg" alt="logo" className="h-72 w-72 rounded-full object-cover" />

                <button
                    onClick={handleRedirect}
                    className="text-2xl w-[250px] bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition cursor-pointer mt-5">
                    Track Your Expense
                </button>
            </div>
        </div>
    );
};

export default FrontPage;
