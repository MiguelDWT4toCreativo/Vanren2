import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleOne from './section-components/about-style-one';
import AboutStyleTwo from './section-components/about-style-two';
import Team from './section-components/team';
import Skill from './section-components/skill';
import Testimonial from './section-components/testimonial-style-one';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <WhyChooseUs />
        <AboutStyleOne />
        <AboutStyleTwo />
        <Team />
        <Skill />
        <Testimonial />
        <Footer />
    </div>
}

export default Home_V1

