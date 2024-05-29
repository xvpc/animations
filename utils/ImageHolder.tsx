/* eslint-disable @next/next/no-img-element */
import React from 'react'

// Assets
import { placeholder, production } from '@/utils/Assets';


type ImageProps = {
    title?: string,
    url: string,
    name?: string,
    width?: number,
    height?: number,
    slider?: true
}


export default function ImageHolder({ title, url, name, width, height, slider }: ImageProps ) {

    return (
        <img 
        onError={(e) => {
            e.currentTarget.src = production ? "." + placeholder : placeholder;
            e.currentTarget.onerror = null;
        }}
        width={width || undefined} 
        height={height || undefined}
        src={production ? "." + url : url} alt={title}

        style={(width && height) ? undefined : {aspectRatio: "5/6", minWidth: slider ? "auto" : " 300px", maxWidth: slider ? "auto" : "440px"}}
        className={`p-0 m-auto object-cover`}
        />
    );
}
