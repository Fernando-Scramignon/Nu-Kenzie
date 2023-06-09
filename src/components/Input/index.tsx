import { Container, InputDiv, TitleDiv } from './style'
import { IInputProps } from '../../interfaces'

function Input({
    description,
    name,
    placeholder,
    helperText,
    type = 'text',
    register,
    errors,
}: IInputProps) {
    return (
        <Container>
            <TitleDiv>
                <label htmlFor={name} className="input-label">
                    {description}
                </label>
                {errors[name] && (
                    <p className="input-error">{errors[name]?.message}</p>
                )}
            </TitleDiv>
            <InputDiv>
                <input
                    {...register(name)}
                    type={type}
                    min={0}
                    placeholder={placeholder}
                />
                {helperText && <p className="helper-text">{helperText}</p>}
            </InputDiv>
        </Container>
    )
}

export default Input
