import { SurveysOverview } from '@/components/surveys-overview'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_layout/surveys')({
  component: () => <div>
    <SurveysOverview/>
  </div>
})