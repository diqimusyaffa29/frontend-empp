import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RowColumnLink = ({ floor, jadwal, fontWeight, label1, label2, witchLink1, witchLink2, imgSrc1, imgSrc2,isBorder1, isBorder2 }) => {
    return (
        <div className="container text-center my-1">
            {/* <p className="fs-1 fw-bold">{jadwal}</p> */}
            {/* <p className="fs-3">{floor}</p> */}
            <div className="row gap-2">
                <div className="col">
                    <Link href={`${witchLink1}`} style={{ textDecoration: 'none', color: 'black' }} >
                        <div className={`${isBorder1} pt-2 rounded`}>
                            <Image alt='Lantai 1' src={imgSrc1 || `assets/hero.jpg`} width={100} height={100} />
                            <p className={fontWeight}>{label1}</p>
                        </div>
                    </Link>
                </div>
                {witchLink2 && (
                <div className="col">
                    <Link href={`${witchLink2}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className={`${isBorder2} pt-2 rounded`}>
                            <Image alt='Lantai 2' src={imgSrc2 || `assets/hero.jpg`} width={100} height={100} />
                            <p className={fontWeight}>{label2}</p>
                        </div>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}

export default RowColumnLink
