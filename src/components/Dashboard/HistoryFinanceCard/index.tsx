import React from 'react'

import { Container, Tag } from './style'

interface IHistoryFinanceCardProps {
	tagColor: string
	title: string
	subtitle: string | undefined
	amount: string
	text: string
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
	tagColor,
	title,
	subtitle,
	amount,
	text
}) => (
	<Container>
		<Tag color={tagColor} />
		<div>
			<span>{title}</span>
			<small>{subtitle}</small>
			<small>{text}</small>
		</div>
		<h3>{amount}</h3>
	</Container>
)

export default HistoryFinanceCard
