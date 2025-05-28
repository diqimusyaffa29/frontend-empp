import React, { useEffect, useState } from 'react'
import HeroSection from '@/components/heroSections'
import IconButtonLink from '@/components/iconButton'
import RowColumnLink from '@/components/rowLink'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    console.log(`pengecekan dilakukan`)
    if (!token) {
      router.push('/login/')
    }
  }, [router])

  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

  const userRole = 'mpp'
  const isLimitedRole = ['kabid', 'kabag', 'kains', 'direktur'].includes(userRole);

  return (
    <div>
      <HeroSection title={`MPP Supervision Website`} description={`Website for MPP to Supervise`} />
      <div className="container pb-5" style={{ marginTop: 90 }}>
        {(userRole === 'mpp' || isLimitedRole) && (
          <IconButtonLink imgSrc={`${prefix}/assets/laporanmod.png`} alt={`Hasil Supervise`} label={`Hasil Supervisi`} url={`https://docs.google.com/spreadsheets/d/16uPsapAudZAbQa2qVKdNl-Qz8dZGD3en7Va0Vwz75FU/edit?gid=1335487255#gid=1335487255`} imgHeight={100} imgWidth={100} fontWeight={`fs-2`} />
        )}
        {/* MENU JADWAL PERAWAT START */}
        {(userRole === 'mpp' || userRole === 'karu') && (
          <>
            <hr style={{ borderTop: '3px solid #000' }} className='mb-xl-3 mb-5' />
            <p className="fs-3 text-center">JADWAL</p>
            <div className="row mt-4">
              <div className="col">
                <IconButtonLink alt={`Jadwal Unit`} label={`Jadwal Unit`} imgSrc={`${prefix}/assets/unit.jpg`} imgHeight={100} imgWidth={100} />
              </div>
              <div className="col">
                <IconButtonLink alt={`Jadwal Dokter DPJP`} label={`Jadwal Dokter DPJP`} imgSrc={`${prefix}/assets/dokter.png`} imgHeight={100} imgWidth={100} />
              </div>
              <div className="col">
                <IconButtonLink alt={`Jadwal Dokter Jaga`} label={`Jadwal Dokter Jaga`} imgSrc={`${prefix}/assets/dokter.png`} imgHeight={100} imgWidth={100} />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <IconButtonLink alt={`Jadwal MPP`} label={`Jadwal MPP`} imgSrc={`${prefix}/assets/jadwal.jpg`} imgHeight={100} imgWidth={100} />
                </div>
                <div className="col ms-xl-5">
                  {/* <IconButtonLink alt={`On call`} label={`On Call`} imgSrc={`${prefix}/assets/unit.jpg`} imgHeight={100} imgWidth={100} /> */}
                  <RowColumnLink isBorder1={`rounded p-2 shadow mb-5 col-xl-4 ms-xl-5`} imgSrc1={`${prefix}/assets/unit.jpg`} witchLink1={`/menus/oncall`} label1={`On Call`} />
                </div>
              </div>
            </div>
            {/* MENU JADWAL PERAWAT END */}
            {/* MENU INPUT SUPERVISI START */}
            {userRole === "mpp" && (
              <>
                <hr style={{ borderTop: '3px solid #000' }} className='mb-xl-3 mb-5' />
                <RowColumnLink isBorder1={`border`} isBorder2={`border`} imgSrc1={`${prefix}/assets/supervisi1.avif`} imgSrc2={`${prefix}/assets/supervisi1.avif`} label1={`Supervisi Layanan Rumah Sakit`} label2={`Supervisi Sumber Daya Manusia`} floor={`Menu Supervisi`} witchLink1={`/primaryMenus/slrs`} witchLink2={`/primaryMenus/ssdm`} />
                <RowColumnLink isBorder1={`border`} isBorder2={`border`} imgSrc1={`${prefix}/assets/supervisi1.avif`} imgSrc2={`${prefix}/assets/supervisi1.avif`} label1={`Supervisi Sarana Prasarana`} label2={`Supervisi Billing`} witchLink1={`/primaryMenus/ssarpras`} witchLink2={`/primaryMenus/sbilling`} />
                <RowColumnLink isBorder1={`border`} isBorder2={`border`} imgSrc1={`${prefix}/assets/kepuasanpelanggan.jpg`} imgSrc2={`${prefix}/assets/three-dots.svg`} label1={`Kepuasaan Pelanggan`} label2={`Lainnya`} witchLink1={`/primaryMenus/kepuasan`} witchLink2={`/primaryMenus/lainnya`} />
                {/* MENU INPUT SUPERVISI END */}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
