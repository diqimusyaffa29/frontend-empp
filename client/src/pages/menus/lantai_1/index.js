import React from 'react'
import RowColumn from '@/components/row'
import Link from 'next/link'

const LantaiSatu = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container'>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Instalasi Gawat Darurat`} colAlt2={`Instalasi Rawat Jalan`} imgCol1={`${prefix}/assets/igd.png`} imgCol2={`${prefix}/assets/irj.png`} labelCol1={`Instalasi Gawat Darurat`} labelCol2={`Instalasi Rawat Jalan`} urlCol1={`https://docs.google.com/spreadsheets/d/1-9Ck5-9paGHS_Cedqj_bNhDVd7ZcZ7ALpnztD44CBww/edit?usp=sharing`} urlCol2={`https://docs.google.com/spreadsheets/d/1wK1w7t1PB-CGZKF1dJP5DosJKtnZQHdgf3g6uQ7At9A/`} floor={`Lantai 1`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>

    )
}

export default LantaiSatu
