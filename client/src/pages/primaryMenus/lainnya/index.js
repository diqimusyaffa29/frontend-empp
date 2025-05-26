import IconButtonLink from '@/components/iconButton'
import Link from 'next/link'
import React from 'react'

const lainnyaPage = () => {
    return (
        <div className='container' style={{ marginTop: 100 }}>
            <IconButtonLink marginTop={20} marginBottom={0} imgSrc="/assets/catatn.jpg" alt={`Catatan`} label={`Catatan`} url={`https://docs.google.com/forms/d/e/1FAIpQLSfr_ILw7LlbcApfSdXFIqWQZWAf0bZvB1zZkcAc-SZ62EtYkw/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default lainnyaPage
