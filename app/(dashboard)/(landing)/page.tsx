import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="sign-in">
          <Button variant="outline">Sign in</Button>
        </Link>
        <Link href="sign-in">
          <Button variant="outline">Register</Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
