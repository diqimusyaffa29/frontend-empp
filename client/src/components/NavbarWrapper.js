import { useRouter } from 'next/router';
import Navbar from './navbar';

export default function NavbarWrapper() {
    const router = useRouter();
    const pathName = router.pathname;

    // Hide Navbar only on login page
    if (pathName === '/login/') return null;

    return <Navbar />;
}
