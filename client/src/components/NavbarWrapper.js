import { useRouter } from 'next/router';
import Navbar from './navbar';

export default function NavbarWrapper() {
    const router = useRouter();
    const pathName = router.pathname;

    if (pathName === '/login' || pathName === '/user') return null;

    return <Navbar />;
}
