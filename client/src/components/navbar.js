"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TimeComponent from "./time";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState(null);
  const [roles, setRoles] = useState(null);

  // GET USER INFORMATION
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
    setRoles(localStorage.getItem("roles") || "null");
    console.log(`pengecekan dilakukan`);
    if (!token) {
      router.push("/login/");
    }
  }, [router]);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    const userObj = userStr ? JSON.parse(userStr) : null;
    setUser(userObj);
  }, []);

  const logout = () => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      console.warn("No token found.");
      return;
    }
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    localStorage.removeItem("roles");
    localStorage.removeItem("rs");
    window.location.href = "/login/";
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
                href={`${url?.profilrs}`}
                // nanti dibuat dinamis
                className={`nav-link rounded ps-2`}
                aria-current="page"
                onClick={handleNavLinkClick}
                target="__blank"
              >
                Profil Rumah Sakit
              </Link>
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
                <button
                  className="container btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {`${user?.name || "Guest"}`}
                </button>
                <ul className="dropdown-menu container p-auto">
                  <li>
                    <button
                      onClick={logout}
                      className="btn btn-danger dropdown-item"
                    >
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
