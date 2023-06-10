import { Container, TypeSection, MockContentSection, GreyBar } from './style'

function EmptyOverviewCard() {
    return (
        <Container>
            <TypeSection />
            <MockContentSection>
                <GreyBar className="upper-bar" />
                <GreyBar className="lower-bar" />
            </MockContentSection>
        </Container>
    )
}

export default EmptyOverviewCard
