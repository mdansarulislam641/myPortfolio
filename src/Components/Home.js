
import React from 'react';
import AboutMe from './AboutMe';
import Array from './Array';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Header from './Header';

import Skills from './Skills-deprecaded';
import Cards from './WhatProvide/Cards';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            {/* <HeroArea></HeroArea> */}
            <AboutMe></AboutMe>
            <Skill/>
            {/* <Skills></Skills> */}
            {/* <Services></Services> */}
            <Cards></Cards>
            <ContactMe></ContactMe>
            <Footer></Footer>
            <Array></Array>
        </div>
    );
};

export default Home;