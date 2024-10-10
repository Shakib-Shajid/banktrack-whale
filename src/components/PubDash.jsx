"use client"
import Link from 'next/link';
import React from 'react';
import { PopupButton } from 'react-calendly';
import { CiCalendar } from 'react-icons/ci';
import { useEffect, useState } from 'react';

const PubDash = () => {

    const [isClient, setIsClient] = useState(false);

    // Check if the component is mounted on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className='flex gap-3 flex-col md:flex-row'>
            <Link href="/registrarse">
                <button className="btn border-none bg-[#4021C8] text-white rounded-full btn-lg px-10 w-full">
                    <div>Empieza gratis</div>
                </button>
            </Link>
            {/* Calendly Popup Button */}
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
                    className="btn border-none rounded-full btn-lg px-10 bg-white text-[#4021C8]"
                />
            )}
        </div>
    );
};

export default PubDash;