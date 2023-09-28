'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant3 } from '../utils/motion';
import { textVariant2 } from '../utils/motion';

type Props = {
    title: string;
    textStyles: string;
};

export const TypingText = ({ title, textStyles }: Props) => {
    return (
        <motion.p variants={textContainer} className={`font-normal text-xl text-secondary-white ${textStyles}`}>
            {Array.from(title).map((letter, index) => {
                if (letter === ' ') {
                    return (
                        <motion.span variants={textVariant2} key={index} className='inline-block'>
                            &nbsp;
                        </motion.span>
                    );
                }
                return (
                    <motion.span variants={textVariant2} key={index} className='inline-block'>
                        {letter}
                    </motion.span>
                );
            })}
        </motion.p>
    );
};

type Props2 = {
    title: React.ReactNode;
    textStyles: string;
};

export const TitleText = ({ title, textStyles }: Props2) => {
    return (
        <motion.h2
            variants={textVariant3}
            transition={{ duration: 0.5, type: 'tween', ease: 'easeIn' }}
            className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
        >
            {title}
        </motion.h2>
    );
};
