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
    description: string
    value: number
    type: 'income' | 'outcome'
}

interface IExpensesType {
    income: string
    outcome: string
}

export type {
    IButtonProps,
    IInputProps,
    ISelectProps,
    IOverviewCardProps,
    IExpensesType,
}
