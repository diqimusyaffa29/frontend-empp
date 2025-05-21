import RowColumn from '@/app/components/row'
import Link from 'next/link'
import React from 'react'

const EyeCenterPage = () => {
    return (
        <div className='container' style={{marginTop: 100}}>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Pelayanan SEC`} colAlt2={`Pelayanan Bedah SEC`} labelCol1={`Pelayanan SEC`} labelCol2={`Pelayanan Bedah SEC`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSe8IXSrpa9Rp1ogB5CdiF00uv_g8SQj4sxL0PE5Lybtz9Xe8w/viewform`} urlCol2={`https://docs.google.com/forms/d/e/1FAIpQLSeRTHUOufTd5NwsAPpwIGGKbn5XnFPfN30xV1wyoS7u4n3g8Q/viewform`} />
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Operasi CITO`} colAlt2={`Batal Operasi`} labelCol1={`Operasi CITO`} labelCol2={`Batal Operasi`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSdZw_I4NYDkKBSRwAaLzN0WPW3KUZTbguSpm2OmyO4xtKfctw/viewform`} urlCol2={`https://docs.google.com/forms/d/e/1FAIpQLSfkdcB95J6Ri5SkvHaK8zgo_gGSwuCGbDMRQ39AEU1knzMsAg/viewform`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default EyeCenterPage
