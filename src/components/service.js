import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v5';
import FaqV2 from './section-components/faq-v2';
import Testimonial from './section-components/testimonial-v2';
import Footer from './global-components/footer';

const ServiceV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Servicios"  />
        <Service />
        <FaqV2 />
        <Testimonial />
        <Footer />
    </div>
}

export default ServiceV1

