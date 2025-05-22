import 'bootstrap/dist/css/bootstrap.css'
import '@/globals.css'; // Pastikan path sesuai struktur kamu

import BootstrapClient from '@/components/BootstrapClient';
import NavbarWrapper from '@/components/NavbarWrapper';
import FooterWrapper from '@/components/FooterWrapper';

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export default function MyApp({ Component, pageProps }) {
    return (
    <div className={poppins.className}>
      <NavbarWrapper />
      <Component {...pageProps} />
      <FooterWrapper />
      <BootstrapClient />
    </div>
  );
}
