'use client';
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { useRef } from 'react';
import People1 from '../public/people-01.png';
import People2 from '../public/people-02.png';
import People3 from '../public/people-03.png';
import Planet02 from '../public/planet-02.png';
import WorldMap from '../public/map.png';
import Image from 'next/image';

const World = () => {
    const mouseX = useMotionValue(Infinity);

    return (
        <>
            <section className={`${styles.paddings} relative z-10`}>
                <motion.div
                    variants={staggerContainer(1, 0)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`${styles.innerWidth} mx-auto flex flex-col`}
                >
                    <TypingText title='People on the World' textStyles='text-center' />
                    <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles='text-center' />

                    <motion.div variants={fadeIn('up', 'tween', 1)} className='mt-16  relative'>
                        <Image src={WorldMap} alt='map' className='w-full h-full object-cover' />
                        <div className='absolute bottom-8 right-10 md:bottom-20 md:right-20 w-[35px] md:w-[70px] aspect-square p-1 bg-[#5d6688] backdrop-blur-2xl bg-opacity-30 rounded-full isolate'>
                            <div className='absolute bg-orange-400 w-full h-full inset-0 -z-10 blur-2xl'></div>
                            <Image src={People1} alt='people' />
                        </div>
                        <div className='absolute top-5 left-10 md:top-10 md:left-20 w-[35px] md:w-[70px] aspect-square p-1 bg-[#5d6688] backdrop-blur-2xl bg-opacity-30 rounded-full isolate'>
                            <div className='absolute bg-pink-400 w-full h-full inset-0 -z-10 blur-2xl'></div>
                            <Image src={People2} alt='people' />
                        </div>
                        <div className='absolute top-1/2 left-[45%] w-[35px] md:w-[70px] aspect-square p-1 bg-[#5d6688] backdrop-blur-2xl bg-opacity-30 rounded-full isolate'>
                            <div className='absolute bg-sky-200 w-full h-full inset-0 -z-10 blur-2xl'></div>
                            <Image src={People3} alt='people' />
                        </div>

                        <div
                            onMouseMove={(e) => {
                                mouseX.set(e.pageX);
                            }}
                            onMouseLeave={() => mouseX.set(Infinity)}
                            className='absolute w-20 lg:w-44 h-16 top-[60%] left-[5%] lg:left-[10%] grid place-content-center'
                        >
                            <WorldCard mouseX={mouseX} />
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export function WorldCard({ mouseX }: { mouseX: MotionValue }) {
    const ref = useRef<HTMLDivElement>(null);
    const mousePosition = useTransform(mouseX, (lastValue) => {
        const bound = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return lastValue - bound.x - bound.width / 2;
    });

    const opacityTransform = useTransform(mousePosition, [-80, -20, 20, 80], [0, 1, 1, 0]);
    const translateYTransform = useTransform(mousePosition, [-80, -20, 20, 80], [0, -150, -150, 0]);
    const scaleTransform = useTransform(mousePosition, [-80, -20, 20, 80], [0, 1, 1, 0]);

    const opacity = useSpring(opacityTransform);
    const translateY = useSpring(translateYTransform);
    const scale = useSpring(scaleTransform);

    return (
        <>
            <div className='absolute inset-0 m-auto w-7 lg:w-14 aspect-square rounded-full bg-sky-400 blur-xl'></div>
            <div ref={ref} className='absolute inset-0 m-auto w-5 lg:w-10 aspect-square rounded-full bg-sky-400'></div>
            <div className='animate-ping absolute inset-0 m-auto w-10 aspect-square rounded-full bg-sky-400 opacity-75 cursor-pointer'></div>
            <motion.div
                style={{ opacity: opacity, y: translateY, scale: scale, zIndex: 1 }}
                className='w-[100px] sm:w-[200px] md:w-[380px] aspect-video  p-2 bg-[#5d6688] rounded-[calc(24px_+_8px)] backdrop-blur-sm bg-opacity-30 isolate'
            >
                <div className='absolute hero-gradient w-full h-full inset-0 -z-10 blur-2xl'></div>
                <div className='relative w-full h-full overflow-hidden  rounded-3xl grid [align-content:end] [justify-content:start] p-4 gap-1'>
                    <Image src={Planet02} alt='Planet 02' className='absolute object-cover w-full h-full scale-125' />
                    <div className='relative flex items-center'>
                        <Image src={People1} alt='people' className='w-8 z-20' />
                        <Image src={People2} alt='people' className='w-8 ml-[-6px] z-10' />
                        <Image src={People3} alt='people' className='w-8 ml-[-6px]' />
                        <p className='text-white ml-2 font-semibold'>+264 has joined</p>
                    </div>
                    <h3 className='text-white text-lg font-bold relative'>The Upside Down</h3>
                </div>
            </motion.div>
        </>
    );
}

export default World;
