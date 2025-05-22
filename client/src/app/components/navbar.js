'use client'
import axios from 'axios';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('auth_token');
            if (!token) return;

            try {
                const res = await axios.get('http://localhost:8000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(res.data);
            } catch (err) {
                console.error('Auth error:', err.response?.data || err.message);
            }
        };

        fetchUser();
    }, []);

    const logout = async () => {
        const token = localStorage.getItem('auth_token');

        if (!token) {
            console.warn('No token found.');
            return;
        }

        try {
            await axios.post('http://localhost:8000/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Clear token on success
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');

            // Redirect to login page
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout failed:', error.response?.data || error.message);
        }
    };

    const pathName = usePathname()

    const handleNavLinkClick = () => {
        const navbarCollapse = document.getElementById('navbarNavAltMarkup');
        if (navbarCollapse && window.bootstrap) {
            const collapseInstance = window.bootstrap.Collapse.getInstance(navbarCollapse) ||
                new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
            collapseInstance.hide();
        }
    };
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">

                <div className="container-fluid">
                    <Link href={`/`} className="navbar-brand ps-2 ps-xl-3 fs-4">
                        E-MPP
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto ps-2 pe-xl-4 gap-2">
                            <Link href="/" className={`nav-link rounded ps-2 ${pathName === '/' ? 'active bg-success bg-gradient text-white' : ''}`} aria-current="page" onClick={handleNavLinkClick}>
                                Manajer On Duty
                            </Link>
                            <Link href="/pedoman" className={`nav-link rounded ps-2 ${pathName === '/pedoman' ? 'active bg-success bg-gradient text-white' : ''}`} aria-current="page" onClick={handleNavLinkClick}>
                                Pedoman
                            </Link>
                            <Link href="/tutorial" className={`nav-link rounded ps-2 ${pathName === '/tutorial' ? 'active bg-success bg-gradient text-white' : ''}`} aria-current="page" onClick={handleNavLinkClick}>
                                Tutorial
                            </Link>
                            <p className='fs-5'>{user?.name || 'Guest'}</p>
                            <button onClick={logout} className="btn btn-danger">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
