import React, { useRef, useState } from 'react'

// Utils
import ImageHolder from '@/utils/ImageHolder'

// SwiperJs
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import SwiperCors, { Pagination, Autoplay, FreeMode, Thumbs, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import 'swiper/css/keyboard'
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// Animations
import { motion } from 'framer-motion';

// Data
import drinks from '@/data/drinks.json';

// Icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdPayment } from 'react-icons/md';

// Mui
import { Button, CircularProgress, IconButton } from '@mui/material';


export default function Drinks() {
    // SwiperJs
    SwiperCors.use([Pagination, Autoplay, FreeMode, Thumbs, Navigation]);

    const nextRef = useRef<HTMLButtonElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentData: Record<string, any> = drinks.data[currentIndex || 0];


    return (
        <div className={`min-h-full flex justify-center items-center transition-all ${drinks?.data[currentIndex || 0]?.backgroundColor || "default-color"}`}>
            {
                drinks?.data?.length < 1 ?
                <CircularProgress className='absolute top-1/2 start-1/2' size={48} /> :
                <div className='container mt-24 p-14 flex flex-row justify-center items-center gap-28'>
                    <motion.div 
                    initial={{scale: 1}}
                    animate={{scale: [1, 1.1, 1]}}
                    transition={{duration: 3.4, repeatDelay: 0.6, repeat: Infinity, ease: 'easeOut'}}
                    className='rounded w-fit h-fit drop-shadow-2xl'
                    >
                        <ImageHolder title={currentData.name} url={currentData.image} />
                    </motion.div>  

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div style={{width: "740px"}} className='flex flex-col justify-center items-center gap-6'>
                            <h1 className={`capitalize text-8xl font-extrabold`}>{currentData.name}</h1>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <p className='text-base w-1/2 font-normal text-gray-100 text-center'>{currentData.description}</p>
                                <Button className='capitalize text-lg font-bold text-green-100' color='success' variant="contained" endIcon={<MdPayment />}>
                                    ${currentData.price}
                                </Button>
                            </div>
                            <div className='flex flex-row justify-between items-center self-end  px-2 gap-8'>
                                <IconButton 
                                ref={prevRef}
                                onClick={() => {

                                }}
                                className='bg-gray-500 text-white ' >
                                    <IoIosArrowBack size={30} />
                                </IconButton>
                                <IconButton 
                                ref={nextRef}
                                className='bg-gray-500 text-white '
                                >
                                    <IoIosArrowForward size={30} />
                                </IconButton>
                            </div>
                        </div>

                        <Swiper 
                            modules={[Navigation]}
                            onSwiper={setThumbsSwiper}
                            // loop={true}
                            grabCursor={true}
                            freeMode={true}
                            spaceBetween={2}
                            slidesPerView={5}
                            onClick={(swiper) => setCurrentIndex(swiper.clickedIndex)}
                            // autoplay={{delay: 3000, pauseOnMouseEnter: false, disableOnInteraction:false }}
                            // breakpoints={{
                            //     0: {
                                    
                            //         slidesPerView: 2
                            //     },
                            //     280: {
                            //         slidesPerView: 3
                            //     },
                            //     400:{
                            //         slidesPerView: 4
                            //     },
                            //     600: {
                            //         slidesPerView: 5
                            //     },
                            //     992:{
                            //         slidesPerView: 7
                            //     },
                            //     1000:{
                            //         slidesPerView: 7
                            //     },
                            //     1200:{
                            //         slidesPerView: 9
                            //     },
                            //     1400:{
                            //         slidesPerView: 10
                            //     }
                            // }}
                            // watchSlidesProgress={true}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            id="thumbs"
                            style={{height: "300px"}}
                            // style={{top: '70%'}}
                            className='mySwiper flex flex-col justify-center items-baseline content-center max-w-4xl overflow-auto my-20 mx-5 py-20 px-5'
                            >
                                {
                                    drinks?.data.map((item, index) => {
                                        return(
                                            <SwiperSlide id={item.name} className={`rounded overflow-hidden cursor-pointer transition-all hover:drop-shadow-2xl`} key={index}>
                                                <ImageHolder slider title={item.name} url={item.image} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                        </Swiper>
                    </div>
                </div>
            }
        </div>
    )
}
