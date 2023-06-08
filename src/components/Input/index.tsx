import { Container, InputDiv, TitleDiv } from './style'
import { IInputProps } from '../../interfaces'

function Input({ title, placeholder, helperText, type = 'text' }: IInputProps) {
    return (
        <Container>
            <TitleDiv>
                <label htmlFor={title} className="input-label">
                    {title}
                </label>
            </TitleDiv>
            <InputDiv>
                <input type={type} name={title} placeholder={placeholder} />
                {helperText && <p className="helper-text">{helperText}</p>}
            </InputDiv>
        </Container>
    )
}

export default Input
