/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react'
import HeroSection from '@/components/heroSections'
import BulletList from '@/components/bulletList'
import { useRouter } from 'next/navigation'

export default function tutorialPage() {
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem('auth_token')
        console.log(`pengecekan dilakukan`)
        if (!token) {
            router.push('/login/')
        }
    }, [])
    return (
        <div>
            <HeroSection title={`TUTORIAL`} />
            <div className="container mb-1 pb-2">
                <div className="row gap-4 mt-3 ">
                    <div className="col">
                        <BulletList title={`Create`} isi1={`Buka https://e-mpp.rsisabanjarbaru.com/`} isi2={`Pilih kategori yang sedang dilakukan supervisi`} isi3={`Input data sesuai dengan indikator penilaian`} />
                    </div>
                    <div className="col">
                        <BulletList title={`Read`} isi1={`Buka Lembar Laporan Kerja MOD pada halaman Awal`} isi2={`Ganti Tanggal untuk melihat laporan`} />
                    </div>
                </div>
                <div className="row gap-4 mt-5">
                    <div className="col">
                        <BulletList title={`Update`} isi1={`Klik pada link edit pada spreadsheet Laporan Kerja MOD`} />
                    </div>
                    <div className="col">
                        <BulletList title={`Delete`} isi1={`Untuk mendelete entries, silahkan hubungi admin`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
