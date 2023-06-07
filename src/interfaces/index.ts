import { ReactNode } from 'react'

interface IButtonProps {
    children: ReactNode
}

interface IInputProps {
    title: string
    placeholder?: string
    helperText?: string
}

export type { IButtonProps, IInputProps }
