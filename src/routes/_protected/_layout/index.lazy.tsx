import { Dashboard } from '@/components/dashboard'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/_layout/')({
  component: () => <div><Dashboard/></div>
})