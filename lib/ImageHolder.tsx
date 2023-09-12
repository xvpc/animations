import React from 'react'

// Nextjs
import Image from 'next/image'

// Styles
import styles from '@/styles/Home.module.css'

type ImageHolderProps = {
    image: string,
    title?: string,
    name?: string,
}
export default function ImageHolder({image, title, name}: ImageHolderProps) {
    if(process.env.NODE_ENV !== 'production'){
        return (
            <Image className={`img-fluid h-100 ${styles.removeSelect}`} src={image} alt={title || ""} width={1080} height={720} />
        )
    }else{
        return (
            <Image className={`img-fluid h-100 ${styles.removeSelect}`} src={`.${image}`} alt={title || ""} width={1080} height={720} />
        )
    }
}
