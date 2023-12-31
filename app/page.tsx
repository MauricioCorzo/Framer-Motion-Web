import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-primary-black overflow-hidden'>
            <Navbar />
            <Hero />
            {/* relative porque el gradient tiene absolute */}
            <div className='relative'>
                <About />
                <div className='gradient-03 blur-[175px] z-0'></div>
                <Explore />
            </div>
            <div className='relative'>
                <GetStarted />
                <div className='gradient-04 blur-[175px] z-0'></div>
                <WhatsNew />
            </div>
            <World />
            <div className='relative'>
                <Insights />
                <div className='gradient-04 blur-[175px] z-0'></div>
                <Feedback />
            </div>
            <Footer />
        </div>
    );
};

export default Page;
