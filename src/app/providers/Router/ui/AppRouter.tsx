import { memo, Suspense, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { routeConfig } from '../config/routeConfig'
import type { RouteProps } from 'react-router-dom'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    )
  }, [])

  return (
    <Routes>
      { Object.values(routeConfig).map(renderWithWrapper) }
    </Routes>
  )
}

export default memo(AppRouter)