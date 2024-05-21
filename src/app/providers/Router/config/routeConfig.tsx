import { CasesPage, CasesDetailsPage, NotFoundPage } from '@/pages'
import { AppRoutes, getRouteCases, getRouteCasesDetails } from '@/shared/constants/router'
import type { RouteProps } from 'react-router-dom'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CASES]: {
    path: getRouteCases(),
    element: <CasesPage />
  },
  [AppRoutes.CASES_DETAILS]: {
    path: getRouteCasesDetails(':id'),
    element: <CasesDetailsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
}