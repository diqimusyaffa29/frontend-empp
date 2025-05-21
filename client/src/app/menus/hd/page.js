import Link from 'next/link'
import React from 'react'
import IconButtonLink from '../../components/iconButton'
import RowColumn from '@/app/components/row'

const HemodialisaPage = () => {
    return (
        <div className='container' style={{marginTop: 100}}>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Pelayanan Hemodialisa`} colAlt2={`Hemodialisa CITO`} labelCol1={`Pelayanan Hemodialisa`} labelCol2={`Hemodialisa CITO`} imgCol1={`/assets/hd.jpeg`} imgCol2={`/assets/hd.jpeg`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSdJ_nvj2Funrch8MxTqAE516uxb06eyoGmqXEy0TvO7R-s3_g/viewform`} urlCol2={`https://docs.google.com/forms/d/e/1FAIpQLSfq85JNd7BHH9lSbBmR4b-qG_i3anSNW1ZhhN9wJvRiNflzEw/viewform`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default HemodialisaPage
