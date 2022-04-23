import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <AppointmentBanner />

        </div>
    );
};

export default Home;