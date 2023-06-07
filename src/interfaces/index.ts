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

export type { IButtonProps, IInputProps, ISelectProps }
