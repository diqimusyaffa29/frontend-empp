import React from 'react'
import RowColumn from '@/components/row'
import Link from 'next/link'

const BankPerawat = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container' style={{ marginTop: 100 }}>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Form Pengajuan Bank Perawat`} colAlt2={`Daftar Pengajuan`} labelCol1={`Form Pengajuan Bank Perawat`} labelCol2={`Daftar Pengajuan`} imgCol1={`${prefix}/assets/laporanmod.png`} imgCol2={`${prefix}/assets/laporanmod.png`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSe-zJ8-kTJAelqZnr3trmVipnUYetPJrgnVLMhV9QVci8fNPw/viewform`} urlCol2={`https://docs.google.com/spreadsheets/d/1lbuJQZM92TwryZ8FIO925n9uyDQUIsxb1eXuk00lrsc/`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default BankPerawat
