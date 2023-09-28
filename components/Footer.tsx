'use client';
import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
    return (
        <>
            <motion.footer
                variants={footerVariants}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.paddings} py-8 relative`}
            >
                <div className='footer-gradient blur-[150px]'></div>

                <div className={'max-w-[1280px] w-full mx-auto grid gap-8'}>
                    <div className='flex justify-between items-center flex-wrap gap-5 text-white'>
                        <h4 className='font-bold md:text-6xl text-5xl '>Enter the Metaverse</h4>
                        <button type='button' className='h-fit py-4 px-6 rounded-[32px] bg-[#25618b] flex items-center gap-3'>
                            <img src='/headset.svg' alt='HeadSet' className='w-6 aspect-square object-contain' />
                            <span className='text-sm uppercase'>Enter Metaverse</span>
                        </button>
                    </div>

                    <div className=''>
                        <div className='mb-12 h-[2px] bg-white/10' />

                        <div className='flex justify-between items-center flex-wrap gap-4 text-white'>
                            <h4 className='font-extrabold text-2xl'>Metaversus</h4>
                            <p className='font-bold text-sm opacity-50'>Copyright &copy; 2021-2022 Metaversus. All rights reserved.</p>
                            <div className='flex gap-4'>
                                {socials.map((social) => (
                                    <img
                                        key={social.name}
                                        src={social.url}
                                        alt={social.name}
                                        className='w-6 aspect-square object-contain cursor-pointer'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </>
    );
};

export default Footer;
