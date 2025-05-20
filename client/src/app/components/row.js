import React from 'react'
import IconButtonLink from './iconButton'

const RowColumn = ({ floor, colAlt1, colAlt2, labelCol1, labelCol2, imgCol1, imgCol2, urlCol1, urlCol2, jadwal }) => {
    return (
        <div className="container text-center " id='rowColumn'>
            <p className="fs-1 fw-bold">{jadwal}</p>
            <p className="fs-3">{floor}</p>
            <div className="row mt-5">
                <div className="col">
                    <IconButtonLink fontWeight={`fs-xl-4 fw-normal`} alt={colAlt1} imgSrc={imgCol1} imgHeight={100} imgWidth={100} label={labelCol1} url={urlCol1} />
                </div>
                <div className="col">
                    <IconButtonLink fontWeight={`fs-xl-4 fw-normal`} alt={colAlt2} imgSrc={imgCol2} imgHeight={100} imgWidth={100} label={labelCol2} url={urlCol2} />
                </div>
            </div>
        </div>
    )
}

export default RowColumn
