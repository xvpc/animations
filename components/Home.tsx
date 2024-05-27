import React from 'react'

// NextJs
import Link from 'next/link';

// Mui
import { Button } from '@mui/material'

// Icons
import { BiSolidDrink } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';


export default function Home() {

    return (
        <div className='flex justify-center items-center min-h-full'>
            <div className='container flex flex-col justify-center items-center text-center p-10 gap-8'>
                <h1 className={`capitalize text-6xl text-stone-600 font-extrabold`}>available</h1>
                <div className='flex flex-row justify-between items-center gap-8'>
                    <Link href={"/meals"}>
                        <Button className='capitalize text-lg font-bold' size='large' color='secondary' variant="contained" endIcon={<IoFastFoodOutline />}>
                            Meals
                        </Button>
                    </Link>
                    <Link href={"/drinks"}>
                        <Button className='capitalize text-lg font-bold' size='large' color='info' variant="contained" endIcon={<BiSolidDrink />}>
                            Drinks
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
