'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface ExportButtonProps {
  data: any[]
  filename: string
  headers: { label: string; key: string }[]
}

export function ExportButton({ data, filename, headers }: ExportButtonProps) {
  const exportToCSV = () => {
    if (!data || data.length === 0) return

    // Create CSV header row
    const csvRows = []
    csvRows.push(headers.map(h => `"${h.label.replace(/"/g, '""')}"`).join(','))

    // Create CSV data rows
    for (const row of data) {
      const values = headers.map(header => {
        let val = row[header.key]
        
        // Handle arrays (e.g. categories)
        if (Array.isArray(val)) {
          val = val.join('; ')
        }
        
        // Handle null/undefined
        if (val === null || val === undefined) {
          val = ''
        }

        // Escape quotes
        const escaped = String(val).replace(/"/g, '""')
        return `"${escaped}"`
      })
      csvRows.push(values.join(','))
    }

    // Convert to Blob and download
    const csvString = csvRows.join('\n')
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button onClick={exportToCSV} variant="outline" size="sm" className="h-8">
      <Download className="mr-2 h-4 w-4" /> Export CSV
    </Button>
  )
}
