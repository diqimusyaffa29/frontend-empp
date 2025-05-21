import Link from 'next/link'
import React from 'react'
import IconButtonLink from '../../components/iconButton'

const RWIPage = () => {
    return (
        <div className='container' style={{marginTop: 100}}>
            <IconButtonLink imgSrc="/assets/rwi.jpg" alt={`Pelayanan Rawat Inap`} label={`Pelayanan Rawat Inap`} url={`https://docs.google.com/forms/d/e/1FAIpQLSePV495djRVllYpdrTlqLYjR7szB55FgRFS8UjWFPh8Xji0UQ/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default RWIPage
