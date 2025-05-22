import Link from 'next/link'
import React from 'react'
import IconButtonLink from '@/components/iconButton'

const KeuanganPage = () => {
    return (
        <div className='container' style={{marginTop: 100}}>
            <IconButtonLink imgSrc="/assets/gagalbayar.avif" alt={`Pasien Gagal Bayar`} label={`Pasien Gagal Bayar`} url={`https://docs.google.com/forms/d/e/1FAIpQLSezmtCO4acfwPF4dMz9ayPlkyke-4VCz99BQtB--fLYDChsIQ/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default KeuanganPage
