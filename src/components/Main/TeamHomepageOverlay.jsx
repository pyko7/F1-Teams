import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamHomepageOverlay = ({ teamName }) => {
    const container = {
        visible: { opacity: 1, transition: { duration: 1.5 } },
        hidden: { opacity: 0, transition: { duration: 1.5 } },
    }

    const item = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={container}
            animate={control}
            className='w-full h-5/6 flex items-center justify-between flex-col z-20'
        >
            <h1
                ref={ref}
                initial="hidden"
                variants={item}
                animate={control}
                className='text-5xl mt-32 font-medium tracking-wide sm:text-4xl sm:tracking-normal' name={teamName}>{teamName}</h1>
            <div
                ref={ref}
                initial="hidden"
                variants={item}
                animate={control}
                className='min-w-[680px] w-1/4 flex justify-evenly sm:min-w-0 sm:w-full sm:flex-col sm:items-center sm:gap-y-4 '>
                <button className='homepageButton font-medium text-white'>Drivers</button>
                <button className='homepageButton bg-slate-100/[.65]'>Team</button>
            </div>
        </motion.div>
    );
};

export default TeamHomepageOverlay;