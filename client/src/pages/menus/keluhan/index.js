import Link from 'next/link'
import React from 'react'
import IconButtonLink from '@/components/iconButton'

const TppriPage = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container' style={{marginTop: 100}}>
            <IconButtonLink imgSrc={`${prefix}/assets/keluhan.webp`} alt={`Catatan Komplain Pasien`} label={`Catatan Komplain Pasien`} url={`https://docs.google.com/forms/d/e/1FAIpQLSe6tJWh2U_e5QBvYUv8XpJLvG6wz6mtI1uCKc8WpSUuIx4TOw/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default TppriPage
