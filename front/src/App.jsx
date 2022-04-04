import React, { lazy, Suspense } from 'react'

import { Navigate, Routes, Route } from 'react-router-dom'
import Loader from 'react-loader'

const SearchFeature = lazy(() => import('./features/search/search'))
const ResultsFeature = lazy(() => import('./features/results/results'))
const DetailsFeature = lazy(() => import('./features/details/details'))

const AppRoutes = () => (
  <Routes>
    <Route
      index
      element={
        <Suspense fallback={<Loader />}>
          <SearchFeature />
        </Suspense>
      }
    />

    <Route
      path="search"
      element={
        <Suspense fallback={<Loader />}>
          <SearchFeature />
        </Suspense>
      }
    />

    <Route
      path="results"
      element={
        <Suspense fallback={<Loader />}>
          <ResultsFeature />
        </Suspense>
      }
    />

    <Route
      path="details"
      element={
        <Suspense fallback={<Loader />}>
          <DetailsFeature />
        </Suspense>
      }
    />

    <Route path="/" element={<Navigate replace to="/search" />} />
    <Route path="*" element={<Navigate replace to="/search" />} />
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

