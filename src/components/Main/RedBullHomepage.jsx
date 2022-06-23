import React from 'react';
import TeamHomepageOverlay from './TeamHomepageOverlay';

const RedBullHomepage = () => {
    const teamName = 'RedBull';
    return (
        <section className={'w-full h-full snap-center bg-[url("/../assets/images/RedBull_car_3D.jpg")] bg-cover bg-no-repeat bg-center'} id={teamName}>
            <TeamHomepageOverlay teamName={teamName} />
        </section>
    );
};

export default RedBullHomepage;