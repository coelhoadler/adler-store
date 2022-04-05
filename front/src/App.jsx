import React, { lazy, Suspense } from 'react'

import { Navigate, Routes, Route } from 'react-router-dom'
import Loader from 'react-loader'

const ResultsFeature = lazy(() => import('./features/results/results'))
const DetailsFeature = lazy(() => import('./features/details/details'))

const AppRoutes = () => (
  <Routes>
    <Route
      index
      element={
        <Suspense fallback={<Loader />}>
          <></>
        </Suspense>
      }
    />

    <Route
      path="items"
      element={
        <Suspense fallback={<Loader />}>
          <ResultsFeature />
        </Suspense>
      }
    />

    <Route
      path="items/:id"
      element={
        <Suspense fallback={<Loader />}>
          <DetailsFeature />
        </Suspense>
      }
    />

    <Route path="/" element={<Navigate replace to="/" />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
)

const AppWrapper = () => {
  return (
    <>
      <AppRoutes></AppRoutes>
      &nbsp;
    </>
  )
}

export default AppWrapper

