import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v5';
import FaqV2 from './section-components/faq-v2';
import Footer from './global-components/footer';

const ServiceV1 = () => {
    const { t } = useTranslation(); // Usa el hook para traducciones

    return (
        <div>
            <Navbar />
            <PageHeader headertitle="Servicios" /> {/* Usa t() para traducir */}
            <Service />
            <FaqV2 />
            <Footer />
        </div>
    );
}

export default ServiceV1;
