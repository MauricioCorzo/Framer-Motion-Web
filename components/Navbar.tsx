'use client';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

//  border-2 border-orange-500

const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className='absolute inset-0 w-1/2  gradient-01 blur-[125px]' />
            <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
                <img src='/search.svg' alt='Search Icon' className='w-[24px] aspect-square object-contain' />
                <h2 className='font-extrabold uppercase text-[2rem] text-white leading-7'>Metaversus</h2>
                <img src='/menu.svg' alt='menu' className='w-6 aspect-square object-contain' />
            </div>
        </motion.nav>
    );
};

export default Navbar;
