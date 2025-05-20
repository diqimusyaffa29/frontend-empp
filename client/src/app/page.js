import React from 'react'
import HeroSection from './components/heroSections'
import IconButtonLink from './components/iconButton'
import RowColumnLink from './components/rowLink'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container pb-5" style={{marginTop: 90}}>
        <IconButtonLink imgSrc="/assets/hero.jpg" alt={`Laporan Kerja MOD`} label={`Laporan Kerja MOD`} url={`https://docs.google.com/spreadsheets/d/16uPsapAudZAbQa2qVKdNl-Qz8dZGD3en7Va0Vwz75FU/edit?gid=1335487255#gid=1335487255`} imgHeight={100} imgWidth={100} fontWeight={`fs-2`}/>
        <hr style={{ borderTop: '3px solid #000' }} className='mb-5' />
        <RowColumnLink label1={`Lantai 1`} label2={`Lantai 2`} floor={`MENU`} witchLink1={`/menus/lantai_1`} witchLink2={`/menus/lantai_2`}/>
        <RowColumnLink label1={`Lantai 3`} label2={`Lantai 4`} witchLink1={`/menus/lantai_3`} witchLink2={`/menus/lantai_4`}/>
        <RowColumnLink label1={`Lantai 5`} label2={`Jadwal Dokter`} witchLink1={`/menus/lantai_5`} witchLink2={`/menus/jadwal_dokter`}/>
        <RowColumnLink label1={`Jadwal MOD`} label2={`Bank Perawat`} witchLink1={`/menus/jadwal_mod`} witchLink2={`/menus/bank_perawat`}/>
        <hr style={{ borderTop: '3px solid #000' }} className='mb-5' />
      </div>
    </div>
  )
}
