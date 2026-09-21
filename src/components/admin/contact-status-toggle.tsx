'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { updateContactStatus } from '@/actions/contact.actions'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

interface ContactStatusToggleProps {
  id: string
  initialStatus: string
}

export function ContactStatusToggle({ id, initialStatus }: ContactStatusToggleProps) {
  const [status, setStatus] = useState(initialStatus || 'pending')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const toggleStatus = async () => {
    setIsLoading(true)
    const newStatus = status === 'pending' ? 'resolved' : 'pending'
    
    const result = await updateContactStatus(id, newStatus)
    
    if (result.success) {
      setStatus(newStatus)
      router.refresh()
    } else {
      console.error('Failed to update status')
    }
    setIsLoading(false)
  }

  return (
    <Badge 
      variant={status === 'pending' ? 'secondary' : 'default'} 
      className="capitalize cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1"
      onClick={toggleStatus}
    >
      {isLoading && <Loader2 className="h-3 w-3 animate-spin" />}
      {status}
    </Badge>
  )
}
