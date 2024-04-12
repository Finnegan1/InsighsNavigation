import { SignUp } from '@/components/sign-up'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signUp')({
  component: () => <div>
    <SignUp />
  </div>
})