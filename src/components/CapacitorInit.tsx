'use client'

import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core'

export const CapacitorInit = () => {
    useEffect(() => {
        console.log('Capacitor platform:', Capacitor.getPlatform())
    }, [])

    return <p>Capacitor Init</p>  
}
