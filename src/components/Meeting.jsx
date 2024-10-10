"use client";
import React, { useEffect, useState } from 'react';

import { PopupButton } from 'react-calendly';
import { CiCalendar } from 'react-icons/ci';

const Meeting = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className='relative'>
            {isClient && (
                <PopupButton
                    url="https://calendly.com/testingdeveloper/30min"
                    rootElement={document.getElementById('calendly-root')}
                    text={
                        <div className='flex gap-1 justify-center items-center'>
                            <CiCalendar className='text-[#4021C8] text-3xl w-8' />
                            Agendar demo
                        </div>
                    }
                    className="btn w-full border-none rounded-full btn-lg px-10 bg-white text-[#4021C8]"
                />
            )}

            {/* Root element for Calendly popup */}
            <div id="calendly-root"></div>
        </div>
    );
};

export default Meeting;
