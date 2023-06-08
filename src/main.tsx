import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { PageProvider } from './contexts'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <PageProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
    </PageProvider>
)
