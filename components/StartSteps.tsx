const StartSteps = ({ text, number }: { text: string; number: number }) => {
    return (
        <>
            <div className='grid [grid-template-columns:70px_1fr] '>
                <div className='flex justify-center items-center  aspect-square rounded-3xl bg-[#323f5d]'>
                    <p className='font-bold text-white text-xl'>0{number}</p>
                </div>
                <p className='ml-8 font-normal place-self-center justify-self-start text-lg text-[#B0B0B0]'>{text}</p>
            </div>
        </>
    );
};

export default StartSteps;
