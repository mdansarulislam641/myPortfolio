
import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            {/* <HeroArea></HeroArea> */}
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;