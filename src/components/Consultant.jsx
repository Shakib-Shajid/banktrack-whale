import React from 'react';

const Consultant = () => {
    return (
        <div className='flex justify-center'>
            <iframe
                width="1200"
                height="500"
                src="https://www.youtube.com/embed/D9hJyomex3c?si=Oq9zC3Z6O0POVZNf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className='md:rounded-2xl h-[200px] w-full md:h-[350px] md:w-[600px] lg:h-[600px] lg:w-[1200px]' referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
        </div>
    );
};

export default Consultant;