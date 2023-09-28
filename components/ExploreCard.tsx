'use client';

import { motion } from 'framer-motion';
import { fadeIn2 } from '../utils/motion';
import Image from 'next/image';

type ExploreCardProps = {
    index: number;
    active: string;
    handleClick: React.Dispatch<React.SetStateAction<string>>;
    id: string;
    imgUrl: string;
    title: string;
};

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }: ExploreCardProps) => {
    return (
        <>
            <motion.div
                variants={fadeIn2('right', 'spring', index * 0.5, 0.75)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.5 }}
                className={`relative ${
                    active === id ? 'flex-grow ' : ''
                } lg:basis-[120px] basis-[60px] flex justify-center items-center transition-[flex] duration-1000 ease-in-out cursor-pointer overflow-hidden `}
                onClick={() => handleClick(id)}
            >
                <Image fill src={imgUrl} alt={title} loading='lazy' className='absolute w-full h-full object-cover rounded-3xl' />

                {active !== id ? (
                    <h3 className='w-48 font-semibold lg:text-[26px] text-[18px] lg:text-start text-center text-white absolute z-0 lg:rotate-[-90deg] lg:bottom-20 bg-black/50 px-4 py-1 rounded-2xl '>
                        {title}
                    </h3>
                ) : (
                    <div className={'opacitiy-animation absolute bottom-0 p-8  w-full  bg-black/50 rounded-b-3xl text-white space-y-3'}>
                        <div className='w-10 lg:w-16 aspect-square rounded-3xl glassmorphism flex justify-center items-center'>
                            <img src='/headset.svg' alt='headset' className='w-1/2 aspect-square object-contain' />
                        </div>
                        <p className=' uppercase text-xs lg:text-md'>Enter de Metaverse</p>
                        <h2 className='font-semibold lg:text-3xl text-lg '>{title}</h2>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default ExploreCard;
