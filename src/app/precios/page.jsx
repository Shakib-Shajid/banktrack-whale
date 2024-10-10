import ToggleOptions from '@/components/ToggleOptions';
import React from 'react';

const page = () => {
    return (
        <div className='pt-40 pb-10 text-center bg-[#FDFAF5]'>
            <h3 className='text-4xl font-bold'>Empieza tu prueba gratis</h3>
            <p className='text-sm my-2'>Pruébalo gratis durante 14 días. No necesitas tarjeta de crédito.</p>
            <ToggleOptions />
        </div>
    );
};

export default page;