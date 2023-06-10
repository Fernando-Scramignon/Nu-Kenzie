import {
    createContext,
    ReactNode,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from 'react'

import { DESKTOP_BREAKPOINT } from '../constants'
import { IOverviewCard } from '../interfaces'

interface IPageProps {
    children: ReactNode
}

interface IPageProvider {
    isDesktop: boolean
    setIsDesktop: Dispatch<SetStateAction<boolean>>
    overviewCards: Array<IOverviewCard>
    setOverviewCards: Dispatch<SetStateAction<Array<IOverviewCard>>>
    descriptionInput: string
    setDescriptionInput: Dispatch<SetStateAction<string>>
    valueInput: string
    setValueInput: Dispatch<SetStateAction<string>>
    resetInputs: () => void
}

const PageContext = createContext<IPageProvider>({} as IPageProvider)

function usePage() {
    return useContext(PageContext)
}

function PageProvider({ children }: IPageProps) {
    const [isDesktop, setIsDesktop] = useState<boolean>(
        window.innerWidth >= DESKTOP_BREAKPOINT
    )

    const [overviewCards, setOverviewCards] = useState<Array<IOverviewCard>>([])

    const [descriptionInput, setDescriptionInput] = useState<string>('')

    const [valueInput, setValueInput] = useState<string>('')

    function resetInputs() {
        setValueInput('')
        setDescriptionInput('')
    }

    return (
        <PageContext.Provider
            value={{
                isDesktop,
                setIsDesktop,
                overviewCards,
                setOverviewCards,
                descriptionInput,
                setDescriptionInput,
                valueInput,
                setValueInput,
                resetInputs,
            }}
        >
            {children}
        </PageContext.Provider>
    )
}

export { PageProvider, usePage }
