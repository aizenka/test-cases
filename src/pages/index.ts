import { lazy } from 'react'

export const CasesPage = lazy(() => import('./CasesPage/ui/CasesPage'))

export const CasesDetailsPage = lazy(() => {
  return import('./CasesDetailsPage/ui/CasesDetailsPage')
})

export { default as NotFoundPage } from './NotFoundPage/ui/NotFoundPage'