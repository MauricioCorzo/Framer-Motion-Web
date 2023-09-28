import { Variants } from 'framer-motion';

export const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 1,
        },
    },
};

export const slideIn = (
    direction: 'right' | 'left' | 'down' | 'up',
    type: 'spring' | 'tween' | 'just' | 'keyframe',
    delay: number,
    duration: number
): Variants => ({
    hidden: {
        opacity: 0,
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: 'easeOut',
        },
    },
});

// Solo sirve para a los hijos pasarle el variant nomas o para hacer el staggerChildren
export const staggerContainer = (staggerChildren: number, delayChildren?: number): Variants => ({
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
        },
    },
});

export const textVariant = (delay: number): Variants => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay: delay,
        },
    },
});

export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.2 },
        // delayChildren: i * 0.1,
    }),
};

export const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};
export const textVariant3 = {
    hidden: {
        opacity: 0,
        y: '100%',
    },
    show: {
        opacity: 1,
        y: '0%',
    },
};

export const fadeIn = (
    direction: 'right' | 'left' | 'down' | 'up',
    type: 'spring' | 'tween' | 'just' | 'keyframe',
    duration: number
    // delay?: number
) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            duration: duration,
            ease: 'easeOut',
        },
    },
});
export const fadeIn2 = (
    direction: 'right' | 'left' | 'down' | 'up',
    type: 'spring' | 'tween' | 'just' | 'keyframe',
    delay: number,
    duration: number
) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            duration: duration,
            delay: delay,
            ease: 'easeOut',
        },
    },
});

export const planetVariants = (direction: 'left' | 'right') => ({
    hidden: {
        x: direction === 'left' ? '-100%' : '100%',
        rotate: 120,
    },
    show: {
        x: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 1.8,
        },
    },
});

export const zoomIn = (delay: number, duration: number) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.5,
        },
    },
};
