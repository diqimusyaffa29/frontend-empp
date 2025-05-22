'use client';

import { usePathname } from 'next/navigation';
import FooterComponent from './footer';

export default function FooterWrapper() {
    const pathname = usePathname();

    // Show footer only on the root page
    if (pathname !== '/') return null;

    return <FooterComponent/>;
}
