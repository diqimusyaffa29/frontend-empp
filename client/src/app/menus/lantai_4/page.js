import React from 'react'
import RowColumn from '../../components/row'
import Link from 'next/link'

const LantaiEmpat = () => {
    return (
        <div className='container'>
            <RowColumn colAlt1={`Rawat Inap Naim`} colAlt2={`Rawat Inap Adn`} floor={`Lantai 4`} labelCol1={`Rawat Inap Naim`} labelCol2={`Rawat Inap Adn`} imgCol1={`/assets/hero.jpg`} imgCol2={`/assets/hero.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1Ul44GHlAOhpOdjQMNJYRt0A28vd1CR_M`} urlCol2={`https://docs.google.com/spreadsheets/d/1yrsNY1ohTeZquLsaVaJ3US7iIEUm7oTZ/`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default LantaiEmpat
