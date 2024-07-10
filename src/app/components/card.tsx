import { SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import React from 'react';

const Card = ({
    title,
    description,
    imagePath = null,
    imageStyle = null,
    imageAlt = null
}) => {
    return (
        <SwiperSlide className='flex flex-col items-center justify-center rounded-md bg-white h-full w-[30%] p-2'>
            {/* {
                imagePath ?? 
                    <Image
                        src={imagePath}
                        width={225}
                        height={225}
                        className={imageStyle}
                        alt={imageAlt}
                    />
            } */}
            <h2 className='text-lg font-bold leading-none tracking-tight text-green-800 md:text-xl lg:text-2xl dark:text-white'>{title}</h2>
            <div className='font-bold font-mono'>{description}</div>
        </SwiperSlide>
    );
}

export default Card;