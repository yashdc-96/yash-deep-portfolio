import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/layout'
import { DashboardPage } from './pages/dashboard-page'
import { LiveMapPage } from './pages/live-map-page'
import { VehiclesPage } from './pages/vehicles-page'
import { ProjectsPage } from './pages/projects-page'
import { AboutPage } from './pages/about-page'
import { NotFoundPage } from './pages/not-found-page'
import { VehiclesProvider } from './lib/vehicles-context'
import { ErrorBoundary } from './components/error-boundary'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'live-map', element: <LiveMapPage /> },
      { path: 'vehicles', element: <VehiclesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function App() {
  return (
    <ErrorBoundary>
      <VehiclesProvider>
        <RouterProvider router={router} />
      </VehiclesProvider>
    </ErrorBoundary>
  )
}

export default App
