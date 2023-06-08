import { Container, InputDiv, TitleDiv } from './style'
import { IInputProps } from '../../interfaces'

function Input({
    description,
    placeholder,
    helperText,
    type = 'text',
}: IInputProps) {
    return (
        <Container>
            <TitleDiv>
                <label htmlFor={description} className="input-label">
                    {description}
                </label>
            </TitleDiv>
            <InputDiv>
                <input
                    type={type}
                    name={description}
                    placeholder={placeholder}
                />
                {helperText && <p className="helper-text">{helperText}</p>}
            </InputDiv>
        </Container>
    )
}

export default Input
