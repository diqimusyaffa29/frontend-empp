import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function UseAuth() {
    const router = useRouter()

    // useEffect(() => {
    //     const token = localStorage.getItem('auth_token')
    //     if (!token) {
    //         router.push('/login')
    //     }
    // }, [router])

    // return null
    useEffect(() => {
        console.log('Checking auth token...');
        const token = localStorage.getItem('auth_token');
        console.log('Token:', token);
        if (!token) {
            console.log('Redirecting to /login');
            router.push('/dist/login');
        }
    }, [router]);

}
