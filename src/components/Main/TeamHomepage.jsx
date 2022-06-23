import React from 'react';

import RedBullHomepage from './RedBullHomepage';
import AlphaTauriHomepage from './AlphaTauriHomepage';
import HaasHomepage from './HaasHomepage';
import McLarenHomepage from './McLarenHomepage';

const TeamHomepage = () => {
    
    return (
        <div className='w-full h-full snap-y snap-mandatory overflow-y-scroll'>
            <RedBullHomepage />
            <AlphaTauriHomepage />
            <HaasHomepage />
            <McLarenHomepage />
        </div>
    );
};

export default TeamHomepage;