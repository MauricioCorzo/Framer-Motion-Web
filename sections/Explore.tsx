'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';
import styles from '../styles';

const Explore = () => {
    const [active, setActive] = useState('world-3');

    return (
        <section className={`${styles.paddings}`} id='explore'>
            <motion.div
                variants={staggerContainer(1.5, 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <motion.div variants={fadeIn('down', 'tween', 1)}>
                    <TypingText title='| The World' textStyles='text-center' />
                </motion.div>

                {/* <motion.div variants={fadeIn('left', 'tween', 1)}> */}
                <TitleText
                    title={
                        <>
                            Choose the world you want <br className='md:block hidden' /> to explore
                        </>
                    }
                    textStyles='text-center'
                />
                {/* </motion.div> */}
                <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;
