import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldAlert } from 'lucide-react'
import Link from 'next/link'

export default function UnauthorizedPage() {
  return (
    <div className="w-full flex min-h-[80vh] items-center justify-center p-4">
      <Card className="w-full max-w-md glass-card shadow-2xl border-red-500/20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-50"></div>
        <CardHeader className="relative z-10 pb-4">
          <div className="mx-auto bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <ShieldAlert className="w-8 h-8 text-red-500" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">Access Denied</CardTitle>
          <CardDescription className="text-muted-foreground mt-2 text-lg">
            You do not have the required administrative privileges to view this page.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10 space-y-4">
          <p className="text-sm text-muted-foreground">
            If you believe this is an error, please contact the system administrator to update your account permissions.
          </p>
          <Button asChild className="w-full mt-4">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
