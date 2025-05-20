"use client"
import Image from 'next/image';
import React from 'react';

const IconButtonLink = ({ url, imgSrc, alt, label,imgHeight,imgWidth, fontWeight,marginTop, marginBottom }) => {
    return (
        <button
            onClick={({}) => window.open(url, '_blank', 'noopener,noreferrer')}
            style={{
                border: 'none',
                background: 'transparent',
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
            className='border rounded p-2 shadow-sm'
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
                objectFit='contain'
            />
            <p className={fontWeight}>{label}</p>
        </button>
    );
};

export default IconButtonLink;
