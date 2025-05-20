import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RowColumnLink = ({ floor, jadwal, fontWeight, label1, label2,witchLink1, witchLink2 }) => {
    return (
        <div className="container text-center">
            <p className="fs-1 fw-bold">{jadwal}</p>
            <p className="fs-3">{floor}</p>
            <div className="row">
                <div className="col">
                    <Link href={`${witchLink1}`}>
                        <Image alt='Lantai 1' src={`/assets/hero.jpg`} width={100} height={100} />
                        <p className={fontWeight} style={{textDecoration: 'none !important' , color:'black'}}>{label1}</p>
                    </Link>
                </div>
                <div className="col">
                    <Link href={`${witchLink2}`}>
                        <Image alt='Lantai 2' src={`/assets/hero.jpg`} width={100} height={100}/>
                        <p className={fontWeight} style={{textDecoration: 'none !important' , color:'black'}}>{label2}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RowColumnLink
