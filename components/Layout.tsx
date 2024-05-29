import React from 'react'

// NextJs
import Link from 'next/link';
import Head from 'next/head';

// Icons
import { IoIosArrowBack } from 'react-icons/io';

// Mui
import { Button, IconButton, useMediaQuery } from '@mui/material';

// Animations
import { motion } from 'framer-motion';

// Utils
import { github, portfolio, site } from '@/utils/Assets';


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
    const matchMd = useMediaQuery('(min-width:768px)');

    return (
        <motion.div
        className={`main-bg overflow-x-hidden text-white flex flex-col justify-between items-center`}
        >
            <Head>
                <title>{pageTitle || site.title}</title>
                    <meta name="title" content={site.title} />
                    <meta name="description" content={site.description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <header>
                <nav className='sticky w-screen h-20 z-50'>
                    {pageTitle?.toLowerCase() != "home" && 
                    <div className='flex flex-row justify-between items-center gap-10 py-4 px-8'>
                        <Link href={"/"}>
                            <IconButton color='default' size="large">
                                <IoIosArrowBack />
                            </IconButton>
                        </Link>
                        <Link href={"https://"+portfolio} target='_blank'>
                            <h1 className='text-gray-200 font-bold'>
                                xvpc.dev
                            </h1>
                        </Link>
                    </div>
                    }
                </nav>
            </header>
            <motion.main 
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className='w-full h-screen px-0'
            >
                {matchMd ?
                    children
                    :
                    <div className='container m-auto my-5 py-5 flex flex-col justify-center items-center text-center gap-5'>
                        <h1 className='text-red-600 font-bold text-wrap'>Only Available for Desktop!</h1>
                        <Link href={github} target='_blank'>
                            <Button className='font-bold capitalize truncate self-center text-center' size="medium" variant="contained" title='Leave site' color='error'>Get out!</Button>
                        </Link>
                    </div>
                }
            </motion.main>
        </motion.div>
    )
}
