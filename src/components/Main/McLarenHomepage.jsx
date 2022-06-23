import React from 'react';
import TeamHomepageOverlay from './TeamHomepageOverlay';

const McLarenHomepage = () => {
    const teamName = "McLaren";

    return (
        <section className={'w-full h-full snap-center bg-[url("/../assets/images/McLaren_car_3D.jpg")] bg-cover bg-no-repeat bg-center' } id={teamName}>
            <TeamHomepageOverlay teamName={teamName} />
        </section>
    );
};

export default McLarenHomepage;