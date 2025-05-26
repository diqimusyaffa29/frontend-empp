import IconButtonLink from '@/components/iconButton'
import Link from 'next/link'
import React from 'react'

const ssarprasPage = () => {
    return (
        <div className='container' style={{ marginTop: 100 }}>
            <IconButtonLink imgSrc="/assets/rusak.webp" alt={`Kerusakan Fasilitas`} label={`Kerusakan Fasilitas`} url={`https://docs.google.com/forms/d/e/1FAIpQLSfJ84FEL9bS1vsJ5kzDplrLpTSAm7bRkd4vAmvo2iMPiMiv8A/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default ssarprasPage
