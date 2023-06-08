import {
    Container,
    TypeSection,
    Type,
    InfoSection,
    UpperRow,
    LowerRow,
} from './style'

import { IOverviewCardProps } from '../../interfaces'
import { IExpensesType } from '../../interfaces'

import { FaTrash } from 'react-icons/fa'

const ExpensesTypeMap: IExpensesType = {
    income: 'Entrada',
    expense: 'Saída',
}

function OverviewCard({ type, description, value }: IOverviewCardProps) {
    return (
        <Container>
            <TypeSection>
                <Type type={type} />
            </TypeSection>
            <InfoSection>
                <UpperRow>
                    <h3>{description}</h3>
                    <FaTrash fill="#343A40" size="12px" cursor="pointer" />
                </UpperRow>
                <LowerRow>
                    <span className="info-section-type">
                        {ExpensesTypeMap[type]}
                    </span>
                    <span className="info-section-value">R$ {value}</span>
                </LowerRow>
            </InfoSection>
        </Container>
    )
}

export default OverviewCard
