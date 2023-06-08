import {
    Container,
    TypeSection,
    Type,
    InfoSection,
    UpperRow,
    LowerRow,
} from './style'
import { IOverviewCardProps } from '../../interfaces'

import { FaTrash } from 'react-icons/fa'

function OverviewCard({ type }: IOverviewCardProps) {
    return (
        <Container>
            <TypeSection>
                <Type type={type} />
            </TypeSection>
            <InfoSection>
                <UpperRow>
                    <h3>Salário - Mês Janeiro</h3>
                    <FaTrash fill="#343A40" size="12px" cursor="pointer" />
                </UpperRow>
                <LowerRow>
                    <span className="info-section-type">Entrada</span>
                    <span className="info-section-value">R$ 6.600,00</span>
                </LowerRow>
            </InfoSection>
        </Container>
    )
}

export default OverviewCard
