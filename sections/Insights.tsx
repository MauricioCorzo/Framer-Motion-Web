'use client';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';
import styles from '../styles';

const Insights = () => {
    return (
        <>
            <section className={`${styles.paddings} relative z-10`}>
                <motion.div
                    variants={staggerContainer(1.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.5 }}
                    className={'max-w-[1280px] w-full mx-auto '}
                >
                    <TypingText title='| Insight' textStyles='text-center' />
                    <TitleText title='Insight about metaverse' textStyles='text-center' />

                    <div className='mt-12 grid gap-7'>
                        {insights.map((insight, index) => (
                            <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Insights;
