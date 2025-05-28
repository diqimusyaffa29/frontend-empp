import React, { useEffect } from 'react'
import HeroSection from '@/components/heroSections'
import IconButtonLink from '@/components/iconButton'
import RowColumn from '@/components/row'
import { useRouter } from 'next/router'

export default function PedomanPage() {
  const router = useRouter()
    useEffect(() => {
      const token = localStorage.getItem('auth_token')
      console.log(`pengecekan dilakukan`)
      if (!token) {
        router.push('/login/')
      }
    }, [router])

  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
  
  return (
    <div>
      <HeroSection title={`Pedoman M.O.D`} />
      <div className="container pb-5" style={{ marginTop: 90 }}>
        <IconButtonLink url={`https://drive.google.com/drive/folders/1HXJQh9tLWu5NzzGNUfD8HKI8wImvvyGg?usp=drive_link`} label={`Materi Pelatihan`} fontWeight={`fs-2`} alt={`Materi Pelatihan Google Drive`} imgSrc={`${prefix}/assets/gdrive.png`} imgHeight={130} imgWidth={200} />
        <hr style={{ borderTop: '3px solid #000' }} className='mb-5' />
        <RowColumn imgH1={200} imgH2={200} imgW1={300} imgW2={300} labelCol1={`Pedoman IGD`} labelCol2={`Pedoman IRJ`} colAlt1={`Pedoman IGD`} colAlt2={`Pedoman IRJ`} imgCol1={`${prefix}/assets/gdocs.png`} imgCol2={`${prefix}/assets/gdocs.png`} urlCol1={`https://docs.google.com/document/d/11uMoEUQaGoOzSzFHndIox121U4JPpeOqnNTreZui7sk/edit?usp=drive_link`} urlCol2={`https://docs.google.com/document/d/1Cn0EghfVyK6pfvXcbeXWJBuweHHhjsuvgfvVJ0KE89E/edit?usp=drive_link`} />
        <RowColumn imgH1={200} imgH2={200} imgW1={300} imgW2={300} labelCol1={`Pedoman IBS`} labelCol2={`Pedoman ICU`} colAlt1={`Pedoman IBS`} colAlt2={`Pedoman ICU`} imgCol1={`${prefix}/assets/gdocs.png`} imgCol2={`${prefix}/assets/gdocs.png`} urlCol1={`https://docs.google.com/document/d/1fFZLSjcrk1Is_FP7j2GX61qJiaWXd8VkcXA2nvbeOtM/edit?usp=drive_link`} urlCol2={`https://docs.google.com/document/d/19ILLGsXIuAHZNBzCR9IH_YyFlBKElN7WgFXPcw1_Lhw/edit?usp=drive_link`} />
        <RowColumn imgH1={200} imgH2={200} imgW1={300} imgW2={300} labelCol1={`Pedoman Hemodialisa`} labelCol2={`Pedoman RWI`} colAlt1={`Pedoman Hemodialisa`} colAlt2={`Pedoman RWI`} imgCol1={`${prefix}/assets/gdocs.png`} imgCol2={`${prefix}/assets/gdocs.png`} urlCol1={`https://docs.google.com/document/d/1BBw2Wk8g3FjBc5ELMeP7LudgE0Y1nCTfueCHFr-AgOI/edit?usp=drive_link`} urlCol2={`https://docs.google.com/document/d/11kUmf5DE62nWZLhnJ2r_g71LCeWwADmE2xUYlMBcPOo/edit?usp=drive_link`} />
      </div>
    </div>
  )
}
