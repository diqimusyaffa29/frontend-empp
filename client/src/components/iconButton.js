'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const IconButtonLink = ({ url, imgSrc, alt, label,imgHeight,imgWidth, fontWeight,marginTop, marginBottom }) => {
    const pathName = usePathname()
    return (
        <button
            onClick={({}) => window.open(url, '_blank', 'noopener,noreferrer')}
            style={{
                border: 'none',
                background: 'white',
                cursor: 'pointer',
                padding: 0,
                // paddingLeft: 20,
                // display: 'inline-flex',
                alignItems: 'center',
                // justifyContent: 'center',
                // marginTop: 90,
                marginTop: marginTop,
                marginBottom: marginBottom,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            aria-label={label}
            title={label}
            className={`${pathName === '/' ? 'border' : ''} rounded p-2 shadow mb-5`}
        >
            {/* <img
                src={imgSrc}
                alt={alt}
                style={{ width: 32, height: 32, objectFit: 'contain' }}
            /> */}

            <Image
                src={imgSrc}
                alt={alt}
                height={imgHeight}
                width={imgWidth}
                style={{objectFit: 'contain'}}
            />
            <p className={fontWeight}>{label}</p>
        </button>
    );
};

export default IconButtonLink;
