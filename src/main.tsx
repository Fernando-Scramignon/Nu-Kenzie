import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <GlobalStyle />
        <RouterProvider router={router} />
    </>
)
