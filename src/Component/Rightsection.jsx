import React from 'react';
import Right_header from './Right_header';
import DummyCard from './DummyCard';
import Recentactivities from './Recentactivities';
import Upcommingactivities from './Upcommingactivities';


const Rightsection = () => {
    return (
        <div className="right-section">


            <Recentactivities />
            <Upcommingactivities />
        </div>
    );
};

export default Rightsection;
