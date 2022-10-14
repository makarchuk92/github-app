import { useState, useEffect } from 'react';

export function useDebounce(value: string, delay = 400): string {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounce(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounce
}