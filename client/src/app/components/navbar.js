"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathName = usePathname()

    
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand ps-2 ps-xl-3" href="#">RSI Sultan Agung Banjarbaru</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto ps-2 pe-xl-4 gap-2">
                            <Link href="/" className={`nav-link rounded ps-2 ${pathName === '/' ? 'active bg-success bg-gradient text-white  bg-opacity-75' : ''}`} aria-current="page">
                                Manajer On Duty
                            </Link>
                            <Link href="/pedoman" className={`nav-link rounded ps-2 ${pathName === '/pedoman' ? 'active bg-success bg-gradient text-white bg-opacity-75' : ''}`} aria-current="page">
                                Pedoman
                            </Link>
                            <Link href="/tutorial" className={`nav-link rounded ps-2 ${pathName === '/tutorial' ? 'active bg-success bg-gradient text-white  bg-opacity-75' : ''}`} aria-current="page">
                                Tutorial
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
