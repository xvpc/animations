import React from 'react'

// Nextjs
import Image from 'next/image'

type ImageHolderProps = {
    image: string,
    title?: string,
    name?: string,
}
export default function ImageHolder({image, title, name}: ImageHolderProps) {
    if(process.env.NODE_ENV !== 'production'){
        return (
            <Image className='img-fluid h-100' src={image} alt={title || ""} width={1080} height={720} />
        )
    }else{
        return (
            <Image className='img-fluid h-100' src={`.${image}`} alt={title || ""} width={1080} height={720} />
        )
    }
}
