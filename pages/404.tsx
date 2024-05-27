import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


export default function NoMatch() {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    })
    
    return (
        <div>404 not found..</div>
    )
}
