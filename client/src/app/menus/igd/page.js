import RowColumn from '@/app/components/row'
import Link from 'next/link'
import React from 'react'

const IgdPage = () => {
    return (
        <div className='container' style={{marginTop: 100}}>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Pelayanan IGD`} colAlt2={`Penolakan Pasien`} labelCol1={`Pelayanan IGD`} labelCol2={`Penolakan Pasien`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSfpsit15IAh3tkd3Eq12wdubc41Xm-KP9hbxxdN1j4UdVd5lw/viewform`} urlCol2={`https://docs.google.com/forms/d/e/1FAIpQLSewKT1N2gup5U_YVx7Vr0eTrygj4ZuvUxzB2sQ_iRCl9JWGrg/viewform`} />
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Pasien Observasi Lebih dari 1 Shift`} colAlt2={`Pasien di Rujuk`} labelCol1={`Pasien Observasi Lebih dari 1 Shift`} labelCol2={`Pasien di Rujuk`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSemm_hKRa88ybtHnRy9GpYs7JnWG3NQB5t9By0RnItVl70xqw/viewform`} urlCol2={`https://docs.google.com/forms/d/e/1FAIpQLSdkdr41R9nLXa_9sBY_QZCLBGaoamPsD4Qo4fY0dPWpY2F_1g/viewform`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default IgdPage
