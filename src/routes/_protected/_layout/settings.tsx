import { Settings } from '@/components/settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_layout/settings')({
  component: () => <div>
    <Settings />
  </div>
})