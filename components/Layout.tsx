import React from 'react'

import { Roboto } from "next/font/google";
import { IoIosArrowBack } from 'react-icons/io';
import { duration, IconButton } from '@mui/material';
import Link from 'next/link';
import { easeInOut, motion } from 'framer-motion';


const roboto = Roboto({
    subsets: ["latin"],
    weight: "400"
})

type layoutProps = {
    children?: React.ReactNode,
    pageTitle: string
}

const animations = {
    initial: {opacity: 0, y: 100},
    animate: { opacity: 1, y: 0},
    exit: {opacity: 0, y: 100}, 
}


export default function Layout({ children, pageTitle }: layoutProps) {

    return (
        <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`${roboto.className} main-bg overflow-x-hidden text-white flex flex-col justify-between items-center`}
        >
            <header>
                <nav className='absolute top-0 start-0 end-0'>
                    {pageTitle?.toLowerCase() != "home" && 
                    <div className='flex flex-row justify-between items-center gap-10 py-4 px-8'>
                        <Link href={"/"}>
                            <IconButton color='default' size="large">
                                <IoIosArrowBack />
                            </IconButton>
                        </Link>
                        <Link href={"https://xvpc.dev"} target='_blank'>
                            <h1 className='text-gray-200 font-bold'>
                                xvpc.dev
                            </h1>
                        </Link>
                    </div>
                    }
                </nav>
            </header>
            <main className='w-full h-screen px-0'>
                {children}
            </main>
        </motion.div>
    )
}
