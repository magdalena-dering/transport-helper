'use client'

import { Capacitor } from '@capacitor/core'
import { useEffect } from 'react'

export const CapacitorInit = () => {
    useEffect(() => {
        console.log('Capacitor platform:', Capacitor.getPlatform())
    }, [])

    return <p>Capacitor Init</p>  
}
