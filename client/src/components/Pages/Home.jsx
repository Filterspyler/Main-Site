import React from 'react';

// imports
import Navbar from '../Site/Navbar.jsx';
import Section1 from '../Sections/Homepage/Section-1';
import Section2 from '../Sections/Homepage/Section-2';

const Home = () => {
    return (
        <>
            <Navbar />
            <Section1 />
            <Section2 />
        </>
    );
};

export default Home;
