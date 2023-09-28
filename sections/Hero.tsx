'use client';

import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import styles from '../styles';
import Image from 'next/image';
import CoverImg from '../public/cover.webp';

const Hero = () => {
    return (
        <>
            <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
                <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
                    <div className='flex justify-center items-center flex-col relative z-10'>
                        <motion.h1 initial='hidden' animate='show' variants={textVariant(1.2)} className={`${styles.heroHeading} leading-none`}>
                            Metaverse
                        </motion.h1>
                        <motion.div initial='hidden' animate='show' variants={textVariant(1.4)} className='flex justify-center items-center'>
                            <h1 className={`${styles.heroHeading} leading-none`}>Ma</h1>
                            <div className={`${styles.heroDText} leading-none`}></div>
                            <h2 className={`${styles.heroHeading} leading-none`}>Ness</h2>
                        </motion.div>
                    </div>

                    <motion.div
                        initial='hidden'
                        animate='show'
                        variants={slideIn('right', 'tween', 0.1, 1)}
                        className='relative md:-mt-[50px] -mt-[32px] isolate grid' // el grid es para poder usar los z-index en los hijos sin ponerles relative
                    >
                        <div className='absolute w-full sm:h-[500px] h-[300px] hero-gradient rounded-tl-[140px] blur-3xl -top-[30px]' />
                        <Image
                            src={CoverImg}
                            alt='cover'
                            priority
                            className='w-full sm:h-[500px] h-[300px]  relative object-cover rounded-tl-[140px] z-10 '
                        />
                        <a href='#explore' className='z-20'>
                            <div className='flex justify-end sm:-mt-[90px] -mt-[70px] pr-[40px]'>
                                <img src='/stamp.png' alt='stamp' className='sm:w-[155px] w-[100px] ' />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;
