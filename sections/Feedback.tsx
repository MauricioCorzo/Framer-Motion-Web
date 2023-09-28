'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => {
    return (
        <>
            <section className={`${styles.paddings} relative z-10`}>
                <motion.div
                    variants={staggerContainer(1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.5 }}
                    className={'max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-6'}
                >
                    <motion.div
                        variants={fadeIn('right', 'tween', 1)}
                        className='gradient-05 relative sm:p-8 p-4 border border-[#6a6a6a] rounded-2xl lg:w-1/3'
                    >
                        <div className='feedback-gradient blur-[175px]'></div>

                        <div className='text-white'>
                            <h4 className='font-bold sm:text-3xl text-2xl sm:leading-10 leading-9'>Samantha</h4>
                            <p className='mt-2 sm:text-lg text-xs sm:leading-5 leading-4'>Founder | Metaversus</p>
                            <p className='mt-6 sm:text-2xl text-lg sm:leading-10 leading-9 '>
                                {' '}
                                “With the development of today&apos;s technology, metaverse is very useful for today&apos;s work, or can be called web
                                3.0. by using metaverse you can use it as anything”
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 'tween', 1)} className='grid items-center relative lg:w-2/3'>
                        <img src='/planet-09.png' alt='Planet 09' className='object-cover rounded-[40px] lg:h-[600px]' />
                        <motion.div
                            variants={zoomIn(3, 1)}
                            initial={'hidden'}
                            whileInView={'show'}
                            viewport={{ once: true }}
                            className='lg:block hidden absolute right-[calc(100%-75px)] top-[3%] w-[155px] aspect-square'
                        >
                            <img src='/stamp.png' alt='' className='object-contain animate-spin-slow' />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Feedback;
