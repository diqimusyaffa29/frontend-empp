import Link from 'next/link'
import React from 'react'
import IconButtonLink from '@/components/iconButton'

const SDMPage = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container' style={{marginTop: 100}}>
            <IconButtonLink imgSrc={`${prefix}/assets/ketenagaan.jpg`} alt={`Distribusi Ketenagaan`} label={`Distribusi Ketenagaan`} url={`https://docs.google.com/forms/d/e/1FAIpQLSdR-_kjiEP9PRocBReEdO2skEt_k6UwvKhTnHCdUHZXL4LHuw/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default SDMPage
