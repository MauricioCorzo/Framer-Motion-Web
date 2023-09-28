'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TypingText, TitleText, NewFeatures } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => {
    return (
        <>
            <section className={`${styles.paddings} relative z-10`}>
                <motion.div
                    variants={staggerContainer(1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                >
                    <motion.div variants={fadeIn('up', 'tween', 1)} className='flex-[0.85]'>
                        <TypingText title='| Whats New' textStyles='text-center' />
                        <TitleText title={<>Whats New About Metaversus?</>} textStyles='text-center' />

                        <div className='mt-[48px] grid [grid-template-columns:repeat(auto-fit,_minmax(210px,1fr))] gap-4 '>
                            {newFeatures.map((feature) => (
                                <NewFeatures key={feature.title} {...feature} />
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={planetVariants('right')} className='flex justify-center items-center flex-1 '>
                        <img src='/whats-new.png' alt='Get Started' className='w-[100%] aspect-square object-contain ' />
                    </motion.div>
                </motion.div>
            </section>
            {/* <div className='fixed bg-black/75 inset-0 ' />
            <section className='overflow-auto  fixed z-30 w-full h-full inset-0 isolate'>
                <div className='max-w-3xl mx-auto my-10 relative z-40'>
                    <div className='relative grid gap-4 bg-white rounded-md'>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default WhatsNew;
