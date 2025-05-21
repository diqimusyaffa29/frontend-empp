import React from 'react'
import RowColumn from '../../components/row'
import Link from 'next/link'

const LantaiTiga = () => {
    return (
        <div className='container'>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Rawat Inap Firdaus`} colAlt2={`Rawat Inap Baitunnisa`} floor={`Lantai 3`} labelCol1={`Rawat Inap Firdaus`} labelCol2={`Rawat Inap Baitunnisa`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1s37pa8JR-QX7u-FSeYIJq0Lz3KCtMTQesMHdopPIhtI/`} urlCol2={`https://docs.google.com/spreadsheets/d/1d-6CxbAfIXa2p-qduMEB92NP9vp1l9iUv5Du_zXRKLk/`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default LantaiTiga
