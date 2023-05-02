import React from 'react';
import Header from '../pages/Section/Header/Header';
import Footer from '../pages/Section/Footer/Footer';
import Banner from '../pages/Section/Banner/Banner';
import ChefSection from '../pages/Section/ChefSection/ChefSection';
import AboutSection from '../pages/Section/AboutSection/AboutSection';
import ContactSection from '../pages/Section/ContactSection/ContactSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <AboutSection></AboutSection>
            <ContactSection></ContactSection>

            <Footer></Footer>
        </div>
    );
};

export default Main;