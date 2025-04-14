import React from 'react'
import Sidebar from "./Sidebar";
const Calendar = () => {
    return (
        <div className="flex h-screen">

            <Sidebar />


            <div className="flex-1 flex justify-center items-center bg-green-100">
                <h1 className="text-4xl font-bold text-green-800">Calendar Component!</h1>
            </div>
        </div>
    )
}

export default Calendar