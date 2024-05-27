import React from 'react'

type ImageProps = {
    title?: string,
    url: string,
    name?: string,
    width: number,
    height: number,
    slider?: true
}

export default function ImageHolder({ title, url, name, width, height, slider }: ImageProps ) {
    if(process.env.NODE_ENV != "production"){
        return (
            <div className=''>
                <img 
                onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.png";
                    e.currentTarget.onerror = null;
                }}
                src={url} alt={title}
                style={{aspectRatio: "5/6", minWidth: slider ? "auto" : " 300px", maxWidth: slider ? "auto" : "440px"}}
                className={`p-0 m-auto object-cover`}
                />
            </div>
        );
    }else{
        return (
            <div className=''>
                <img 
                onError={(e) => {
                    e.currentTarget.src = "./images/placeholder.png";
                    e.currentTarget.onerror = null;
                }}
                src={"." + url} alt={title}
                style={{aspectRatio: "5/6", minWidth: slider ? "auto" : " 300px", maxWidth: slider ? "auto" : "440px"}}
                className={`p-0 m-auto object-cover`}
                />
            </div>
        );
    }
}
