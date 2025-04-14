import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Rightsection from './Rightsection';
import Table from './Table';

const AddTransaction = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex h-screen add-transaction-page">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <div className="p-3  top-header">
                    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>


                <div className="p-2 w-full overflow-hidden flex items-center justify-center">
                    <Table />

                </div>
            </div>


        </div>
    );
};

export default AddTransaction;
