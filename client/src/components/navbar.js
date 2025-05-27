"use client";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("auth_token");
            if (!token) return;

            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setUser(res.data);
            } catch (err) {
                console.error("Auth error:", err.response?.data || err.message);
            }
        };

        fetchUser();
    }, []);

    const logout = () => {
        const token = localStorage.getItem("auth_token");

        if (!token) {
            console.warn("No token found.");
            return;
        }
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");

        window.location.href = "/login/";
        // try {
        //   await axios.post(
        //     `${process.env.NEXT_PUBLIC_API_URL}/api/logout`,
        //     {},
        //     {
        //       headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        //     }
        //   );

        //   // Clear token on success

        //   // Redirect to login page
        // } catch (error) {
        //   console.error("Logout failed:", error.response?.data || error.message);
        // }
    };

    const pathName = usePathname();

    const handleNavLinkClick = () => {
        const navbarCollapse = document.getElementById("navbarNavAltMarkup");
        if (navbarCollapse && window.bootstrap) {
            const collapseInstance =
                window.bootstrap.Collapse.getInstance(navbarCollapse) ||
                new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
            collapseInstance.hide();
        }
    };
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <Link href={`/`} className="navbar-brand ps-2 ps-xl-3 fs-4">
                        E-MPP
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto ps-2 pe-xl-4 gap-2">
                            <Link
                                href="/"
                                className={`nav-link rounded ps-2 ${pathName === "/"
                                    ? "active bg-success bg-gradient text-white"
                                    : ""
                                    }`}
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Manajer On Duty
                            </Link>
                            <Link
                                href="/pedoman"
                                className={`nav-link rounded ps-2 ${pathName === "/pedoman/"
                                    ? "active bg-success bg-gradient text-white"
                                    : ""
                                    }`}
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Pedoman
                            </Link>
                            <Link
                                href="/tutorial"
                                className={`nav-link rounded ps-2 ${pathName === "/tutorial/"
                                    ? "active bg-success bg-gradient text-white"
                                    : ""
                                    }`}
                                aria-current="page"
                                onClick={handleNavLinkClick}
                            >
                                Tutorial
                            </Link>
                            <div className="dropdown">
                                <button className="container btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {`${user?.name || 'Guest'}`}
                                </button>
                                <ul className="dropdown-menu container p-auto">
                                    <li>
                                        <button onClick={logout} className="btn btn-danger dropdown-item">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
