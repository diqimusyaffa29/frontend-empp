import Link from 'next/link'
import React from 'react'
import IconButtonLink from '../../components/iconButton'
import RowColumn from '@/app/components/row'

const IBSPage = () => {
    return (
        <div className='container' style={{ marginTop: 100 }}>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Pelayanan Kamar Bedah`} colAlt2={`Batal Operasi`} labelCol1={`Pelayanan Kamar Bedah`} labelCol2={`Batal Operasi`} imgCol1={`/assets/surgery.png`} imgCol2={`/assets/canceled.png`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSdxlBs9Z2rEq06INll5Da80ybixDZ47ftp_WQGqtQpH6F6QSg/viewform`} urlCol2={`https://docs.google.com/forms/d/e/1FAIpQLSdDSXB0802OcSNgRmSd2oNmqKLkbHy2dYHkIDLNrCq3zKKjRw/viewform`} />
            <IconButtonLink imgSrc="/assets/surgery.png" alt={`Operasi CITO`} label={`Operasi CITO`} url={`https://docs.google.com/forms/d/e/1FAIpQLSc5BcV-B1PNXFJWIapIusyUHPKXhBtM7gXDUZOFsXFWBG98zA/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default IBSPage
