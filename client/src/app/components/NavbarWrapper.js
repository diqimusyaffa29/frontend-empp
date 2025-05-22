'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();

    // Show footer only on the root page
    if (pathname === '/login') return null;

    return <Navbar/>;
}
