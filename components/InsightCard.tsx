'use client';

import { motion } from 'framer-motion';
import { fadeIn2 } from '../utils/motion';

type InsightProps = {
    imgUrl: string;
    title: string;
    subtitle: string;
    index: number;
};

// el fadeIn2 le digo yo el delay de cada uno manualmente, el fadeIn1 obtiene el staggerChildren del padre ya que es hederitario

const InsightCard = ({ imgUrl, title, subtitle, index }: InsightProps) => {
    return (
        <>
            <motion.div variants={fadeIn2('up', 'tween', index * 0.5, 0.75)} className='flex lg:flex-row flex-col gap-10 text-white p-4'>
                <img src={imgUrl} alt='planet-01' className='w-full lg:w-64 aspect-video lg:aspect-square object-cover rounded-2xl' />
                <div className='p-2 space-y-6 flex-1 '>
                    <h4 className=' lg:text-5xl text-2xl'>{title}</h4>
                    <p className='max-w-[45ch] text-xl text-secondary-white'>{subtitle}</p>
                </div>
                <div className='w-14 md:w-24 aspect-square grid items-start'>
                    <div className='p-4 border-2 border-white rounded-full relative w-full aspect-square mx-auto'>
                        <img src='arrow.svg' alt='arrow' className='w-full' />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default InsightCard;
