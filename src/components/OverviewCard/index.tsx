import { IOverviewCardProps } from '../../interfaces'
import { Container, TypeSection, Type, InfoSection } from './style'

// import { FaTrash } from 'react-icons/fa'

function OverviewCard({ type }: IOverviewCardProps) {
    return (
        <Container>
            <TypeSection>
                <Type type={type} />
            </TypeSection>
            <InfoSection></InfoSection>
        </Container>
    )
}

export default OverviewCard
