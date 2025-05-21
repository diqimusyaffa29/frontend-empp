import React from 'react'
import RowColumn from '../../components/row'
import Link from 'next/link'

const LantaiLima = () => {
    return (
        <div className='container'>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Rawat Inap Ma'wa`} colAlt2={`Rawat Inap Darussalam`} floor={`Lantai 5`} labelCol1={`Rawat Inap Ma'wa`} labelCol2={`Rawat Inap Darussalam`} imgCol1={`/assets/rwi.jpg`} imgCol2={`/assets/rwi.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1ldEi6TTlzMk-PzKLPrSvpYnsLG0AHoeyhKJa4Yr0lQg/`} urlCol2={`https://docs.google.com/spreadsheets/d/1IreVrqzxN2sV2R4e0oewRMMi6isiJcGGts1tiA_gkwk/edit?usp=sharing`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default LantaiLima
