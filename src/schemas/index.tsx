import * as yup from 'yup'

function maxCharMessage(number: number): string {
    return `Máximo de ${number} caracteres`
}

function requiredMessage(name: string): string {
    return `${name} é obrigatório`
}

const valueOptions = ['Entrada', 'Despesa']

let expensesFormSchema = yup.object({
    description: yup
        .string()
        .required(requiredMessage('Descrição'))
        .max(30, maxCharMessage(30)),
    value: yup
        .number()
        .required(requiredMessage('Valor'))
        .max(12, maxCharMessage(12)),
    type: yup
        .mixed()
        .oneOf(Object.values(valueOptions))
        .required(requiredMessage('Tipo')),
})

export { expensesFormSchema }
