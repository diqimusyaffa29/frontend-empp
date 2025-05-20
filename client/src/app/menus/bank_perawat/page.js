import React from 'react'
import RowColumn from '../../components/row'

const BankPerawat = () => {
    return (
        <div style={{marginTop: 100}}>
            <RowColumn colAlt1={`Form Pengajuan Bank Perawat`} colAlt2={`Daftar Pengajuan`} labelCol1={`Form Pengajuan Bank Perawat`} labelCol2={`Daftar Pengajuan`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSe-zJ8-kTJAelqZnr3trmVipnUYetPJrgnVLMhV9QVci8fNPw/viewform`} urlCol2={`https://docs.google.com/spreadsheets/d/1lbuJQZM92TwryZ8FIO925n9uyDQUIsxb1eXuk00lrsc/`} />
        </div>
    )
}

export default BankPerawat
