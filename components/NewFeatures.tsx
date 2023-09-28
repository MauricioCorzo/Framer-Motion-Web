import React from 'react';

export const NewFeatures: React.FC<{ imgUrl: string; title: string; subtitle: string }> = ({ imgUrl, title, subtitle }) => {
    return (
        <>
            <div className=''>
                <div className='bg-[#323f5d] rounded-3xl w-[70px] aspect-square grid place-items-center'>
                    <img src={imgUrl} alt='icon' className='w-1/2 h-1/2' />
                </div>
                <h3 className='mt-6 font-bold text-2xl text-white'>{title}</h3>
                <p className='mt-4 text-lg text-[#b0b0b0]'>{subtitle}</p>
            </div>
        </>
    );
};

export default NewFeatures;
