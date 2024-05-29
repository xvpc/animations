import React, { useState } from 'react'

// Framer Motion
import { motion } from 'framer-motion'

// Lib
import ImageHolder from '@/utils/ImageHolder';
import BurgerDetails from '@/lib/BurgerDetails';

// Mui
import { Button, Tooltip } from '@mui/material';

// Utils
import { production } from '@/utils/Assets';


// 
const imageDimensions: Object = {maxHeight: "130px", maxWidth: "280px", position: "relative", zIndex: 1};

const animationTransition = {delay: 0.1, duration: 0.8, ease: "easeOut", type: "spring"};


export default function Meals() {
    const [activeBurger, setActiveBurger] = useState(false);

    return (
        <div style={{backgroundImage: `url(${production ? "./images/meals/burger/smoke.png" : "/images/meals/burger/smoke.png"})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className='min-h-full transition-all flex justify-center items-center p-5 overflow-hidden'>
            <motion.div className='container relative py-5 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <motion.div style={{zIndex: 15, fontSize: "70px", fontFamily: "Verdana" }} className='flex flex-col justify-center items-center gap-2 overflow-hidden font-bold text-white m-0 p-0 border-b-2 pb-2' initial={{opacity: 1, height: "auto"}} animate={activeBurger ? {opacity: 0, height: 0} : {}} transition={{...animationTransition, duration: 0.5}}>
                        <h3 className='text-slate-800 font-light'>Try</h3>
                        <h1>Our Fatass Meal</h1>
                    </motion.div>
                    <h5 className='font-bold font-serif p-0 m-0' style={{fontFamily: "cursive, Arial, Helvetica, sans-serif", fontSize: "14px"}}>Since 1943</h5>
                </div>
                <Tooltip title={activeBurger ? 'Go back' : 'Show'} arrow>
                    <Button style={{zIndex: 10}} className='font-bold font-xl m-3 capitalize truncate rounded-full' size="large" variant="contained" color='warning' 
                    onClick={() => {
                        setActiveBurger(!activeBurger)
                        !activeBurger && setTimeout(() => {document?.getElementById("burger")?.scrollIntoView({behavior: "smooth"})}, 400);
                    }}>
                        {activeBurger ? "I'm good!" : "Order Now!"}
                    </Button>
                </Tooltip>

                <motion.div id="burger" className='relative flex flex-col justify-center items-center' transition={{from: "beforeChildren"}}>
                    <motion.div initial={{ y: 100}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 7}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='Bun' cal={130} />}
                        <ImageHolder width={1080} height={720} url='/images/meals/burger/topbun.png' />
                    </motion.div>
                    <motion.div initial={{ y: 20}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 6}} className=''>
                        {activeBurger && <BurgerDetails direction='end' name='onion' cal={26} />}
                        <ImageHolder width={1080} height={720} url='/images/meals/burger/onion.png' />
                    </motion.div>
                    <motion.div initial={{ y: -80}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 5}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='bacon' cal={65} />}
                        <ImageHolder width={1080} height={720} url='/images/meals/burger/bacon.png' />
                    </motion.div>
                    <motion.div initial={{ y: -170}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 4}} className=''>
                        {activeBurger && <BurgerDetails direction='end' name='cheese' cal={112} />}
                        <ImageHolder width={1080} height={720} url='/images/meals/burger/cheese.png' />
                    </motion.div>
                    <motion.div initial={{ y: -280}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 3}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='meat' cal={225} />}
                        <ImageHolder width={1080} height={720} url='/images/meals/burger/meat.png' />
                    </motion.div>
                    <motion.div initial={{ y: -380}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 2}} className=''>
                        {activeBurger && <BurgerDetails direction='end' name='lettuc' cal={14} />}
                        <ImageHolder width={1080} height={720} url='/images/meals/burger/lettuc.png' />
                    </motion.div>
                    <motion.div initial={{ y: -480}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 1}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='bun' cal={120} />}
                        <ImageHolder width={1080} height={720} url='/images/meals/burger/bottombun.png' />
                    </motion.div>
                </motion.div>

                <motion.div style={{zIndex: 2}} initial={{  scale: 0, opacity: 0}} animate={activeBurger ? { scale: 1, opacity: 1} : {}} transition={{...animationTransition, delay: 0.4, duration: 1}} className='absolute'>
                    <ImageHolder width={1080} height={720} url='/images/meals/burger/chips.png' />
                </motion.div>
                <motion.div style={{height: 180, width: 160, zIndex: 1}} initial={{ opacity: 0, right: "-10000px"}} animate={activeBurger ? { opacity: 1, right: "0px"} : {}} transition={{...animationTransition, delay: 0.4, duration: 1.8}} className='absolute bottom-1/2'>
                    <ImageHolder width={1080} height={720} url='/images/meals/burger/ketchup2.png' />
                </motion.div>
            </motion.div>
        </div>
    )
}
