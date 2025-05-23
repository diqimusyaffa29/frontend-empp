import React from 'react'
import IconButtonLink from '@/components/iconButton'
import Link from 'next/link'

const JadwalMod = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div style={{ marginTop: 100 }} className='container'>
            <IconButtonLink marginBottom={50} imgSrc={`${prefix}/assets/laporanmod.png`} alt={`Jadwal MOD`} label={`Jadwal MOD`} url={`https://docs.google.com/spreadsheets/d/1WF-salCCv4IiP4sltDzeVbLICC4khFAlR3JDSrC48zo/`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4 fw-normal`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default JadwalMod
