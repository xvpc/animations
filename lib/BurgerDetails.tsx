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
        <motion.div style={{x: direction == "start" ? -220 : 220, zIndex: 12}} variants={detailsAnimation} initial="initial" animate="animation" className={`d-flex flex-row justify-content-between algin-items-bottom text-white overflow-hidden ${direction == "start" ? "text-start" : "text-end"}`}>
            <div className={`${direction == "start" ? "order-0" : "order-1"} d-flex flex-column w-100 justify-content-between algin-items-bottom text-white overflow-hidden`}>
                <span className='p-0 m-0 fw-bolder text-capitalize'>{name}</span>
                <div className='border-bottom border-1 border-white w-100'></div>
                <p style={{fontSize: "12px"}} className='p-0 m-0 fw-normal ps-2'>{cal || 0} Cal</p>
            </div>
            {
                direction == "start" ?
                <div style={{marginTop: 8, marginLeft: "-10px"}} className='fw-bold fs-4'>&bull;</div> :
                <div style={{marginTop: 8, marginRight:  "-10px"}} className='fw-bold fs-4'>&bull;</div>
            }
        </motion.div>
    )
}
