'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function UseAuth() {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('auth_token')
        if (!token) {
            router.push('/login')
        }
    }, [])
}
