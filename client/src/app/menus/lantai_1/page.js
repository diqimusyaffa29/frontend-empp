import React from 'react'
import RowColumn from '../../components/row'
import Link from 'next/link'

const LantaiSatu = () => {
    return (
        <div className='container'>
            <RowColumn colAlt1={`Instalasi Gawat Darurat`} colAlt2={`Instalasi Rawat Jalan`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} labelCol1={`Instalasi Gawat Darurat`} labelCol2={`Instalasi Rawat Jalan`} urlCol1={`https://docs.google.com/spreadsheets/d/1-9Ck5-9paGHS_Cedqj_bNhDVd7ZcZ7ALpnztD44CBww/edit?usp=sharing`} urlCol2={`https://docs.google.com/spreadsheets/d/1wK1w7t1PB-CGZKF1dJP5DosJKtnZQHdgf3g6uQ7At9A/`} floor={`Lantai 1`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>

    )
}

export default LantaiSatu
