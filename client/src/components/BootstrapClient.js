"use client"
import { useEffect } from "react"


const BootstrapClient = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min').then((bootstrap) => {
            window.bootstrap = bootstrap;
        });
    }, []);
}

export default BootstrapClient
