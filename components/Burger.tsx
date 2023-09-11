import React, { useState } from 'react'

// Framer Motion
import { motion } from 'framer-motion'

// Lib
import ImageHolder from '@/lib/ImageHolder'
import BurgerDetails from '@/lib/BurgerDetails';

// Mui
import { Button, Tooltip } from '@mui/material';


// 
const imageDimensions: Object = {maxHeight: "130px", maxWidth: "280px", position: "relative", zIndex: 1};

const animationTransition = {delay: 0.1, duration: 0.8, ease: "easeOut", type: "spring"};

export default function Burger() {
    const [activeBurger, setActiveBurger] = useState(false);

    return (
        <div style={{backgroundImage: "url('/images/burger/smoke.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className='min-vh-100 p-5 overflow-hidden'>
            <motion.div className='container position-relative py-5 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-column justify-content-center algin-items-center gap-4 text-center'>
                    <motion.h1 style={{zIndex: 15, fontSize: "70px", fontFamily: "Verdana" }} className='overflow-hidden fw-bold text-white m-0 p-0 border-bottom border-3 pb-2' initial={{opacity: 1, height: "auto"}} animate={activeBurger ? {opacity: 0, height: 0} : {}} transition={{...animationTransition, duration: 0.5}}>
                        Our Fatass Meal
                    </motion.h1>
                    <h5 className='fw-bold fst-italic p-0 m-0' style={{fontFamily: "cursive, Arial, Helvetica, sans-serif", fontSize: "14px"}}>Since 1943</h5>
                </div>
                <Tooltip title={activeBurger ? 'Hide Animation' : 'Show Animation'} arrow>
                    <Button style={{zIndex: 10}} className='fw-bold fs-4 m-3 text-capitalize text-truncate rounded-5' size="large" variant="contained" color='warning' 
                    onClick={() => {
                        setActiveBurger(!activeBurger)
                        !activeBurger && setTimeout(() => {document?.getElementById("burger")?.scrollIntoView({behavior: "smooth"})}, 400);
                    }}>
                        Order Now!
                    </Button>
                </Tooltip>

                <motion.div id="burger" className='position-relative d-flex flex-column justify-content-center algin-items-center' transition={{from: "beforeChildren"}}>
                    <motion.div initial={{ y: 100}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 7}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='Bun' cal={130} />}
                        <ImageHolder image='/images/burger/topbun.png' />
                    </motion.div>
                    <motion.div initial={{ y: 20}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 6}} className=''>
                        {activeBurger && <BurgerDetails direction='end' name='onion' cal={26} />}
                        <ImageHolder image='/images/burger/onion.png' />
                    </motion.div>
                    <motion.div initial={{ y: -80}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 5}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='bacon' cal={65} />}
                        <ImageHolder image='/images/burger/bacon.png' />
                    </motion.div>
                    <motion.div initial={{ y: -170}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 4}} className=''>
                        {activeBurger && <BurgerDetails direction='end' name='cheese' cal={112} />}
                        <ImageHolder image='/images/burger/cheese.png' />
                    </motion.div>
                    <motion.div initial={{ y: -280}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 3}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='meat' cal={225} />}
                        <ImageHolder image='/images/burger/meat.png' />
                    </motion.div>
                    <motion.div initial={{ y: -380}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 2}} className=''>
                        {activeBurger && <BurgerDetails direction='end' name='lettuc' cal={14} />}
                        <ImageHolder image='/images/burger/lettuc.png' />
                    </motion.div>
                    <motion.div initial={{ y: -480}} animate={activeBurger ? {y:0} : {}} transition={animationTransition} style={{...imageDimensions, zIndex: 1}} className=''>
                        {activeBurger && <BurgerDetails direction='start' name='bun' cal={120} />}
                        <ImageHolder image='/images/burger/bottombun.png' />
                    </motion.div>
                </motion.div>

                <motion.div style={{zIndex: 2}} initial={{  scale: 0, opacity: 0}} animate={activeBurger ? { scale: 1, opacity: 1} : {}} transition={{...animationTransition, delay: 0.4, duration: 1}} className='position-absolute '>
                    <ImageHolder image='/images/burger/chips.png' />
                </motion.div>
                <motion.div style={{height: 180, width: 160, zIndex: 1}} initial={{ opacity: 0, right: "-10000px"}} animate={activeBurger ? { opacity: 1, right: "0px"} : {}} transition={{...animationTransition, delay: 0.4, duration: 1.8}} className='position-absolute bottom-50'>
                    <ImageHolder image='/images/burger/ketchup2.png' />
                </motion.div>
            </motion.div>
        </div>
    )
}
