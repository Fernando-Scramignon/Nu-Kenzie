import { ReactNode } from 'react'

interface IButtonProps {
    children: ReactNode
}

interface IInputProps {
    title: string
    placeholder?: string
    helperText?: string
}

interface ISelectProps {
    title: string
    placeholder?: string
}

interface IOverviewCardProps {
    type: 'income' | 'outcome'
}

export type { IButtonProps, IInputProps, ISelectProps, IOverviewCardProps }
