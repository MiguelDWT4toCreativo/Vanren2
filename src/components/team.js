import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TeamPage from './section-components/team-page';
import Cta from './section-components/cta-v10';
import Brand from './section-components/brand-v3';
import Case from './section-components/case';
import Footer from './global-components/footer-v2';

const Team = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Nuestro Equipo Exclusivo" subheader="Nuestro Equipo"  />
        <TeamPage />
        <Cta />
        <Brand />
        <Case customclass="case-one__team-page" />
        <Footer />
    </div>
}

export default Team

