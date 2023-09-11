import React, { useState, useEffect } from 'react';

// Nextjs
import Link from 'next/link';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import Layout from '@/components/Layout';
import Burger from '@/components/Burger';

// Parallax 
import { ParallaxProvider } from "react-scroll-parallax";

// Framer motion
import { AnimatePresence } from 'framer-motion'

// Mui
import { CircularProgress, useMediaQuery, Button } from '@mui/material';

export default function Home() {
  const matchMd = useMediaQuery('(min-width:768px)');

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    timeOut = setTimeout(() => {setLoaded(true)}, 500)
    return () => {
      clearTimeout(timeOut);
    }
  }, [])
  
  return (
    <Layout title='Burger Design'>
      <ParallaxProvider>
        <AnimatePresence>
          <div className='gradient-bg min-vh-100'>
            <header>
              <nav className='container-fluid p-2'>
                <div className='container px-0 d-flex flex-row flex-wrap justify-content-between algin-items-center gap-3'>
                    <div className='d-flex flex-column justify-content-center algin-items-center'>
                        <h1 className='p-0 m-0 text-white fw-bold'>Some</h1>
                        <h1 className='p-0 m-0 text-warning ps-3 fw-bolder'>Burger</h1>
                    </div>
                </div>
              </nav>
              </header>
            {matchMd ?
            loaded ? 
            <Burger /> : 
            <div className='container m-auto mt-5 pt-5 d-flex justify-content-center algin-items-center'>
              <CircularProgress color="warning" />
            </div> :
            <div className='container m-auto my-5 py-5 d-flex flex-column justify-content-center algin-items-center text-center gap-5'>
              <h1 className='text-danger fw-bold text-wrap'>Only Available for Desktop!</h1>
              <Link href="https://github.com/xvpc">
                <Button className='fw-bold text-capitalize text-truncate algin-self-center text-center' size="medium" variant="contained" title='Leave site' color='error'>Get out!</Button>
              </Link>
            </div>
            }
          </div>
        </AnimatePresence>
      </ParallaxProvider>
    </Layout>
  )
}
