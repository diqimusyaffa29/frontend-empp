import React from 'react'
import IconButtonLink from './iconButton'

const RowColumn = ({ floor, colAlt1, colAlt2, labelCol1, labelCol2, imgCol1, imgCol2, urlCol1, urlCol2, jadwal, imgH1, imgH2, imgW1, imgW2 }) => {
    return (
        <div className="container text-center " id='rowColumn'>
            <p className="fs-1 fw-bold">{jadwal}</p>
            <p className="fs-3">{floor}</p>
            <div className="row mt-3">
                <div className="col mb-5">
                    <IconButtonLink fontWeight={`fs-xl-4 fw-normal`} alt={colAlt1} imgSrc={imgCol1 || `/assets/hero.jpg`} imgHeight={imgH1} imgWidth={imgW1} label={labelCol1} url={urlCol1} />
                </div>
                <div className="col mb-5">
                    <IconButtonLink fontWeight={`fs-xl-4 fw-normal`} alt={colAlt2} imgSrc={imgCol2 || `/assets/hero.jpg`} imgHeight={imgH2} imgWidth={imgW2} label={labelCol2} url={urlCol2} />
                </div>
            </div>
        </div>
    )
}

export default RowColumn
