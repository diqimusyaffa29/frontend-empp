import Image from 'next/image'
import React from 'react'

// export default function CardComponent(imgSrc, alt) {
//     return (
//         <div className="card container">
//             <Image src={imgSrc} alt={alt} />
//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     )
// }


// import React from 'react'

const CardComponent = ({ imgSrc, alt, url }) => {
    return (
        <div className="card container">
            <Image src={imgSrc} alt={alt} url={url} width={300} height={300}/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default CardComponent
