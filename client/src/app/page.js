import React from 'react'
import HeroSection from './components/heroSections'
import IconButtonLink from './components/iconButton'
import CardComponent from './components/card'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mt-2">
        <IconButtonLink imgSrc="/assets/hero.jpg" alt={`Laporan Kerja MOD`} label={`Laporan Kerja MOD`} url={`https://docs.google.com/spreadsheets/d/16uPsapAudZAbQa2qVKdNl-Qz8dZGD3en7Va0Vwz75FU/edit?gid=1335487255#gid=1335487255`} imgHeight={100} imgWidth={100} />
        <hr style={{borderTop :'3px solid #000'}}/>

      </div>
    </div>
  )
}
