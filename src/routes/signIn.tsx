import { SignIn } from '@/components/sign-in'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signIn')({
  component: () => <div>
    <SignIn/>
  </div>
})