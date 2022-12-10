
import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Header from './Header';
import HeroArea from './HeroArea';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroArea></HeroArea>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;