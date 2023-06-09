import * as yup from 'yup'
import { MAX_EXPENSE_FORM_DECIMAL, MAX_EXPENSE_FORM_VALUE } from '../constants'

function maxCharMessage(number: number): string {
    return `Máximo de ${number} caracteres`
}

function maxNumberMessage(): string {
    return `Valor máximo de ${MAX_EXPENSE_FORM_VALUE}`
}

function requiredMessage(name: string): string {
    return `${name} é obrigatório`
}

const valueOptions = ['income', 'expense']

let expensesFormSchema = yup.object({
    description: yup
        .string()
        .required(requiredMessage('Descrição'))
        .max(30, maxCharMessage(30)),
    value: yup
        .string()
        .required(requiredMessage('Valor'))
        .max(MAX_EXPENSE_FORM_DECIMAL, maxNumberMessage()),
    type: yup
        .mixed()
        .oneOf(Object.values(valueOptions))
        .required(requiredMessage('Tipo')),
})

export { expensesFormSchema }
