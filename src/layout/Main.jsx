import React from 'react';
import Header from '../pages/Section/Header/Header';
import Footer from '../pages/Section/Footer/Footer';
import Banner from '../pages/Section/Banner/Banner';
import ChefSection from '../pages/Section/ChefSection/ChefSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ChefSection></ChefSection>

            <Footer></Footer>
        </div>
    );
};

export default Main;