import { createBrowserRouter } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
    },
    {
        path: '/home',
        element: <Home />,
    },
])

export { router }
