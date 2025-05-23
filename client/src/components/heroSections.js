import React from 'react'

const HeroSection = ({title, description}) => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <section className="py-5 bg-black text-white text-center mt-5" id='heroSection' style={{backgroundImage: `url(${prefix}/assets/hero.jpg)`}}>
            <div className="container my-xl-5">
                <div className="row align-items-center">
                    <p className="display-3">{title}</p>
                    {description && <p className="lead mb-4">{description}</p>}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
