import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { ChangeEvent } from 'react'

interface IButtonProps {
    children: ReactNode
    type?: 'submit' | 'button' | 'reset'
    onClickFunction?: () => void
}

interface IInputProps {
    id: string
    name: string
    description: string
    register: UseFormRegister<any>
    errors?: any
    placeholder?: string
    helperText?: string
    type?: string
    state?: any
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

interface ISelectProps {
    id: string
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

interface IOverviewCard extends IOverviewCardProps {
    id: number
}

interface IExpensesType {
    income: string
    expense: string
}

interface IExpensesTotalProps {
    value: number
}

export type {
    IButtonProps,
    IInputProps,
    ISelectProps,
    IOverviewCardProps,
    IOverviewCard,
    IExpensesType,
    IExpensesTotalProps,
}
