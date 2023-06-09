import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface IButtonProps {
    children: ReactNode
    type?: 'submit' | 'button' | 'reset'
    onClickFunction?: () => void
}

interface IInputProps {
    name: string
    description: string
    register: UseFormRegister<any>
    errors?: any
    placeholder?: string
    helperText?: string
    type?: string
}

interface ISelectProps {
    name: string
    register: UseFormRegister<any>
    errors?: any
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
