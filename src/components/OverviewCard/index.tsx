import { IOverviewCardProps } from '../../interfaces'
import { Container, TypeSection, Type, InfoSection } from './style'

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
