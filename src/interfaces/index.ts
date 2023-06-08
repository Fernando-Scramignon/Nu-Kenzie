import { ReactNode } from 'react'

interface IButtonProps {
    children: ReactNode
}

interface IInputProps {
    description: string
    placeholder?: string
    helperText?: string
    type?: string
}

interface ISelectProps {
    description: string
    placeholder?: string
}

interface IOverviewCardProps {
    description: string
    value: number
    type: 'income' | 'expense'
}

interface IOverviewCard extends IOverviewCardProps {}

interface IExpensesType {
    income: string
    expense: string
}

export type {
    IButtonProps,
    IInputProps,
    ISelectProps,
    IOverviewCardProps,
    IOverviewCard,
    IExpensesType,
}
