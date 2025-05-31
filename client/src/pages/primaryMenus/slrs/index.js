import RowColumnLink from '@/components/rowLink'
import Link from 'next/link'
import React from 'react'

const slrsPage = () => {
    return (
        <div className='container' style={{ marginTop: 100 }}>
            <RowColumnLink label1={`Rawat Jalan`} label2={`Instalasi Gawat Darurat`} imgSrc1={`/assets/icon/rajal.png`} imgSrc2={`/assets/icon/igd.png`} witchLink1={`/menus/irj`} witchLink2={`/menus/igd`} />
            <RowColumnLink label1={`Rawat Inap & ICU`} label2={`Instalasi Bedah Sentral`} imgSrc1={`/assets/icon/ranap.png`} imgSrc2={`/assets/icon/ibs.png`} witchLink1={`/menus/rwi`} witchLink2={`/menus/ibs`} />
            <RowColumnLink label1={`Hemodialisa`} label2={`TPPRI`} imgSrc1={`/assets/icon/hemo.png`} imgSrc2={`/assets/icon/tppri.png`} witchLink1={`/menus/hd`} witchLink2={`/menus/tppri`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default slrsPage
