import { Container, InputDiv, TitleDiv } from './style'
import { IInputProps } from '../../interfaces'

function Input({
    description,
    id,
    name,
    placeholder,
    helperText,
    type = 'text',
    register,
    errors,
    state,
    onChange,
}: IInputProps) {
    return (
        <Container>
            <TitleDiv>
                <label htmlFor={id} className="input-label">
                    {description}
                </label>
                {errors[name] && (
                    <p className="input-error">{errors[name]?.message}</p>
                )}
            </TitleDiv>
            <InputDiv>
                <input
                    id={id}
                    {...register(name)}
                    type={type}
                    value={state}
                    onChange={onChange}
                    min={0}
                    placeholder={placeholder}
                />
                {helperText && <p className="helper-text">{helperText}</p>}
            </InputDiv>
        </Container>
    )
}

export default Input
