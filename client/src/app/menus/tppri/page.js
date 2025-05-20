import Link from 'next/link'
import React from 'react'
import IconButtonLink from '../../components/iconButton'

const TppriPage = () => {
    return (
        <div className='container' style={{marginTop: 100}}>
            <IconButtonLink imgSrc="/assets/hero.jpg" alt={`Pelayanan TPPRI`} label={`Pelayanan TPPRI`} url={`https://docs.google.com/forms/d/e/1FAIpQLSc5BcV-B1PNXFJWIapIusyUHPKXhBtM7gXDUZOFsXFWBG98zA/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default TppriPage
