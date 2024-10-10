import Image from 'next/image';
import React from 'react';

const Video = () => {
    return (
        <div className='-mt-56 md:-mt-72 mb-10 z-30'>
            <div className='text-center flex flex-col lg:flex-row justify-evenly my-5'>
                {/* <div className='flex items-center gap-2 flex-col lg:flex-row'>
                    <div className='flex items-center'>
                        <span>Excelente</span>
                        <div className="rating rating-sm rating-half">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                            <input
                                type="radio"
                                name="rating-10"
                                className="mask mask-star-2 mask-half-1 bg-green-500"
                                defaultChecked />
                            <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                        </div>
                    </div>
                    
                    <div className='flex gap-2 items-center'>
                        <span>51 opinionses en</span>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-1" className="mask mask-star bg-green-500" /></div>
                        <span className='font-bold'>Trustpilot</span>
                    </div>
                </div> */}

                <div className='text-xl flex gap-3 items-center justify-center lg:justify-end'>
                    <Image src="/google.png" width="100" height="100" alt="" className='inline-block' />
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                    </div>
                    <span>4.8</span>
                </div>
            </div>
            {/* <div className='flex justify-center'>
                <iframe
                    width="1200"
                    height="500"
                    src="https://www.youtube.com/embed/gEXqyrq5d6A?si=zwWICEvDygy0svo_"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className='md:rounded-2xl h-[200px] w-full md:h-[350px] md:w-[600px] lg:h-[600px] lg:w-[1200px]'
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div> */}
        </div>
    );
};

export default Video;