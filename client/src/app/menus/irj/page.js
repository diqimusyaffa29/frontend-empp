import RowColumn from '@/app/components/row'
import Link from 'next/link'
import React from 'react'

const IrjPage = () => {
    return (
        <div className='container' style={{marginTop: 100}}>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Pelayanan Rawat Jalan`} colAlt2={`Pasien ODC`} labelCol1={`Pelayanan Rawat Jalan`} labelCol2={`Pasien ODC`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/forms/d/e/1FAIpQLSeFLiQFyEcBWxtGnvuI0sDMaQxqsAl6h7QNPzW0uJNUXna9Bg/viewform`} urlCol2={`https://docs.google.com/forms/d/e/1FAIpQLScOxZooRSGUg8ZMIhR9R63A8RYA6DfyM1nE4Daz4TMQAJAT6A/viewform`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default IrjPage
