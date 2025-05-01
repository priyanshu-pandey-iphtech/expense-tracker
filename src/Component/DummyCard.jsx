import React from 'react'

const DummyCard = () => {
    return (
        <div className="w-72 h-40 bg-gradient-to-br from-blue-900 to-gray-700 text-white rounded-2xl p-6 relative shadow-lg mt-1">
            <div className="flex justify-between items-center">
                <div className="font-bold text-lg">BANK</div>
                <div className="w-7 h-7 bg-yellow-400 rounded-lg"></div>
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-wider">
                **** **** **** 1234
            </div>
            <div className=" mt-4">
                <div className="text-sm">James Anderson</div>
                <div className="text-sm">12/25</div>
            </div>
            <div className="absolute bottom-2 right-6 text-xs uppercase">
                VISA
            </div>
        </div>
    )
}

export default DummyCard