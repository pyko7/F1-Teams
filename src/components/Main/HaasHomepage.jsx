import React from 'react';
import TeamHomepageOverlay from './TeamHomepageOverlay';

const HaasHomepage = () => {
    const teamName = "Haas";

    return (
        <section className={'w-full h-full snap-center bg-[url("/../assets/images/Haas_car_3D.jpg")] bg-cover bg-no-repeat bg-center'} id={teamName}>
            <TeamHomepageOverlay teamName={teamName} />
        </section>
    );
};

export default HaasHomepage;