import React from 'react'

// Framer Motion
import { motion } from 'framer-motion'

type BurgerDetailsProps = {
    direction: "start" | "end",
    name: string,
    cal?: number
}

const detailsAnimation = {
    initial: { y: "-100vh", opacity: 0},
    animation: {
        y: 80, opacity: 1,
        transition: { delay: 0.1, duration: 1, ease: "easeInOut", type: "spring" }
    }
}

export default function BurgerDetails({direction, name, cal} : BurgerDetailsProps) {

    return (
        <motion.div style={{x: direction == "start" ? -220 : 220, zIndex: 12}} variants={detailsAnimation} initial="initial" animate="animation" className={`flex-row justify-between items-end text-white overflow-hidden ${direction == "start" ? "text-start" : "text-end"}`}>
            <div className={`flex flex-col w-100 justify-between items-end text-white overflow-hidden`}>
                <span className={`${direction == "start" ? "self-start" : "self-end"} p-0 m-0 font-extrabold capitalize`}>{name}</span>
                <div className='border-b-2 border-white w-full'></div>
                <p style={{fontSize: "12px"}} className={`${direction == "start" ? "self-start" : "self-end"} p-0 m-0 font-normal ps-2`}>{cal || 0} Cal</p>
            </div>
            {
                direction == "start" ?
                <div style={{marginTop: 8, marginLeft: "-10px"}} className='font-bold text-xl'>&bull;</div> :
                <div style={{marginTop: 8, marginRight:  "-10px"}} className='font-bold text-xl'>&bull;</div>
            }
        </motion.div>
    )
}
