'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => {
    return (
        <>
            <section className={`${styles.paddings} relative z-10`}>
                <motion.div
                    variants={staggerContainer(1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, margin: '-100px' }}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                >
                    <motion.div variants={planetVariants('left')} className='flex justify-center items-center flex-1 '>
                        <img src='/get-started.webp' alt='Get Started' className='w-[100%] aspect-square object-contain ' />
                    </motion.div>
                    <motion.div variants={fadeIn('up', 'tween', 1)} className='flex-[0.85]'>
                        <TypingText title='| How Metaversus works' textStyles='text-center' />
                        <TitleText title={<>Get Started with just a few clicks</>} textStyles='text-center' />

                        <div className='mt-[31px] max-w-lg grid gap-6'>
                            {startingFeatures.map((feature, index) => (
                                <StartSteps key={feature} number={index + 1} text={feature} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default GetStarted;
