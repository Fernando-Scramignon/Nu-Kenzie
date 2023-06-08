import {
    createContext,
    ReactNode,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from 'react'

import { DESKTOP_BREAKPOINT } from '../constants'

interface IPageProps {
    children: ReactNode
}

interface IPageProvider {
    isDesktop: boolean
    setIsDesktop: Dispatch<SetStateAction<boolean>>
}

const PageContext = createContext<IPageProvider>({} as IPageProvider)

function usePage() {
    return useContext(PageContext)
}

function PageProvider({ children }: IPageProps) {
    const [isDesktop, setIsDesktop] = useState<boolean>(
        window.innerWidth >= DESKTOP_BREAKPOINT
    )

    return (
        <PageContext.Provider value={{ isDesktop, setIsDesktop }}>
            {children}
        </PageContext.Provider>
    )
}

export { PageProvider, usePage }
