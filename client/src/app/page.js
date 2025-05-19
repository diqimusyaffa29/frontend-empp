import React from 'react'
import HeroSection from './components/heroSections'
import IconButtonLink from './components/iconButton'
import CardComponent from './components/card'
import RowColumn from './components/row'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mt-2">
        <IconButtonLink imgSrc="/assets/hero.jpg" alt={`Laporan Kerja MOD`} label={`Laporan Kerja MOD`} url={`https://docs.google.com/spreadsheets/d/16uPsapAudZAbQa2qVKdNl-Qz8dZGD3en7Va0Vwz75FU/edit?gid=1335487255#gid=1335487255`} imgHeight={100} imgWidth={100} fontWeight={`fs-2`} />
        <RowColumn colAlt1={`Instalasi Gawat Darurat`} colAlt2={`Instalasi Rawat Jalan`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} labelCol1={`Instalasi Gawat Darurat`} labelCol2={`Instalasi Rawat Jalan`} urlCol1={`https://docs.google.com/spreadsheets/d/1-9Ck5-9paGHS_Cedqj_bNhDVd7ZcZ7ALpnztD44CBww/edit?usp=sharing`} urlCol2={`https://docs.google.com/spreadsheets/d/1wK1w7t1PB-CGZKF1dJP5DosJKtnZQHdgf3g6uQ7At9A/`} floor={`Lantai 1`} jadwal={`Jadwal Rawat Inap`} />
        <RowColumn colAlt1={`Intensive Care Unit (ICU)`} colAlt2={`Instalasi Bedah Sentral (IBS)`} floor={`Lantai 2`} labelCol1={`Intensive Care Unit (ICU)`} labelCol2={`Instalasi Bedah Sental (IBS)`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1wN8dksu0FdiWAMSebBEz4SUUrc6DyMtjxK3Kl78_aYU/`} urlCol2={`https://docs.google.com/spreadsheets/d/11Taj3Hk4MTNTTOLCcZYqCmG5zlXiK0eI/`} />
        <IconButtonLink imgSrc="/assets/hero.jpg" alt={`Instalasi Dialisis`} label={`Instalasi Dialisis`} url={`https://docs.google.com/spreadsheets/d/1YoI3Pu0lLarbOagGVHom0j5BnHv-w_9a/edit?usp=sharing&ouid=114174739585821834097&rtpof=true&sd=true`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4 fw-normal`} />
        <RowColumn colAlt1={`Rawat Inap Firdaus`} colAlt2={`Rawat Inap Baitunnisa`} floor={`Lantai 3`} labelCol1={`Rawat Inap Firdaus`} labelCol2={`Rawat Inap Baitunnisa`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1s37pa8JR-QX7u-FSeYIJq0Lz3KCtMTQesMHdopPIhtI/`} urlCol2={`https://docs.google.com/spreadsheets/d/1d-6CxbAfIXa2p-qduMEB92NP9vp1l9iUv5Du_zXRKLk/`} />
        <RowColumn colAlt1={`Rawat Inap Naim`} colAlt2={`Rawat Inap Adn`} floor={`Lantai 4`} labelCol1={`Rawat Inap Naim`} labelCol2={`Rawat Inap Adn`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1Ul44GHlAOhpOdjQMNJYRt0A28vd1CR_M`} urlCol2={`https://docs.google.com/spreadsheets/d/1yrsNY1ohTeZquLsaVaJ3US7iIEUm7oTZ/`} />
        <RowColumn colAlt1={`Rawat Inap Ma'wa`} colAlt2={`Rawat Inap Darussalam`} floor={`Lantai 5`} labelCol1={`Rawat Inap Ma'wa`} labelCol2={`Rawat Inap Darussalam`} imgCol1={`/assets/5ero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1ldEi6TTlzMk-PzKLPrSvpYnsLG0AHoeyhKJa4Yr0lQg/`} urlCol2={`https://docs.google.com/spreadsheets/d/1IreVrqzxN2sV2R4e0oewRMMi6isiJcGGts1tiA_gkwk/edit?usp=sharing`} />
      </div>
    </div>
  )
}
