'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';

const About = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <div className='gradient-02 blur-[190px] z-0'></div>
            <motion.div
                variants={staggerContainer(1, 0)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.5 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-4`}
            >
                <motion.div variants={fadeIn('up', 'tween', 1)}>
                    <TypingText title='| About Metaversus' textStyles='text-center' />
                </motion.div>
                <motion.p
                    variants={fadeIn('right', 'tween', 1)}
                    className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
                >
                    <span className='font-extrabold text-white'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world
                    by feeling like it&apos;s really real, you can feel what you feel in this metaverse world, because this is really the{' '}
                    <span className='font-extrabold text-white'>madness of the metaverse</span> of today, using only{' '}
                    <span className='font-extrablod text-white'>VR</span> devices you can easily explore the metaverse world you want, turn your
                    dreams into reality. Let&apos;s <span className='font-extrabold text-white'>explore</span> the madness of the metaverse by
                    scrolling down
                </motion.p>
                <motion.img variants={fadeIn('up', 'tween', 0.3)} src='/arrow-down.svg' alt='arrow down' className='mt-6 max-w-full mx-auto' />
            </motion.div>
        </section>
    );
};

export default About;
