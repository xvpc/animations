import React, { useEffect } from 'react'

// NextJs
import { useRouter } from 'next/router'

// Components
import Layout from '@/components/Layout';


export default function NoMatch(){
    const router = useRouter();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        timeout = setTimeout(() => {
            router.push('/');
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    }, []);
    

    return (
        <Layout pageTitle='NoMatch'>
            <div className='flex justify-center items-center min-h-full'>
                <h1 className='text-center m-auto font-bold text-4xl text-gray-600'>404 not found..</h1>
            </div>
        </Layout>
    )
}
