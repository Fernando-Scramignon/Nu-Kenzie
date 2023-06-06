import ReactDOM from 'react-dom/client'
import Welcome from './pages/Welcome'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <GlobalStyle />
        <Welcome />
    </>
)
