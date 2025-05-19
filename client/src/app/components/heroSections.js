import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <section className="py-5 bg-black text-white text-center mt-5" id='heroSection'>
            <div className="container my-xl-5">
                <div className="row align-items-center">
                    <p className="display-3">M.O.D Supervision Website</p>
                    <p className="lead mb-4">Website for M.O.D to Supervise</p>
                </div>
            </div>
        </section>

    )
}
