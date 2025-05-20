import { useCallback } from 'react'

/**
 * Simple toast hook stub that uses window.alert.
 * Replace with your preferred toast library integration.
 */
export default function useToast() {
  const toast = useCallback(({ title, description }) => {
    // You can swap this with a real toast implementation
    window.alert(`${title}\n${description}`)
  }, [])

  return { toast }
}
