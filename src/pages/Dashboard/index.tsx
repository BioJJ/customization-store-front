import React, { useMemo } from 'react'
import ContentHeader from '../../components/ContentHeader'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'
import opsImg from '../../assets/ops.svg'

import { Container, Content } from './style'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'
import PieChartBox from '../../components/PieChartBox'
import Layout from '../../components/Layout'

const Dashboard: React.FC = () => {
	const totalPendents = useMemo(() => {
		const total: number = 2

		return total
	}, [])

	const totalComplete = useMemo(() => {
		const total: number = 10

		return total
	}, [])

	const totalBalance = useMemo(() => {
		return totalComplete - totalPendents
	}, [totalComplete, totalPendents])

	const message = useMemo(() => {
		if (totalBalance < 0) {
			return {
				title: 'Que triste!',
				description: 'Neste mês, você gastou mais do que deveria.',
				footerText:
					'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
				icon: sadImg
			}
		} else if (totalComplete === 0 && totalPendents === 0) {
			return {
				title: "Op's!",
				description:
					'Neste mês, não há registros de combinações pendentes ou completas.',
				footerText:
					'Parece que você não fez nenhum registro no mês e ano selecionado.',
				icon: opsImg
			}
		} else if (totalBalance === 0) {
			return {
				title: 'Ufaa!',
				description: 'Neste mês, você gastou exatamente o que ganhou.',
				footerText: 'Tenha cuidado. No próximo tente poupar o seu dinheiro.',
				icon: grinningImg
			}
		} else {
			return {
				title: 'Muito bem!',
				description: 'Sua Meta está positiva!',
				footerText: 'Continue assim. ',
				icon: happyImg
			}
		}
	}, [totalBalance, totalComplete, totalPendents])

	const relationExpensesVersusGains = useMemo(() => {
		const total = totalComplete + totalPendents

		const percentGains = Number(((totalComplete / total) * 100).toFixed(1))
		const percentExpenses = Number(((totalPendents / total) * 100).toFixed(1))

		const data = [
			{
				name: 'Completos',
				value: totalComplete,
				percent: percentGains ? percentGains : 0,
				color: '#E44C4E'
			},
			{
				name: 'Pendentes',
				value: totalPendents,
				percent: percentExpenses ? percentExpenses : 0,
				color: '#F7931B'
			}
		]

		return data
	}, [totalComplete, totalPendents])

	return (
		<Layout>
			<Container>
				<ContentHeader title="Dashboard" lineColor="#F7931B"></ContentHeader>

				<Content>
					<WalletBox
						title="Total de Combinações"
						color="#4E41F0"
						amount={totalBalance}
						footerlabel="atualizado com base nas Completas e Pendentes"
						icon="dolar"
					/>

					<WalletBox
						title="Completas"
						color="#F7931B"
						amount={totalComplete}
						footerlabel="atualizado com base nas Completas e Pendentes"
						icon="arrowUp"
					/>

					<WalletBox
						title="Pendentes"
						color="#E44C4E"
						amount={totalPendents}
						footerlabel="atualizado com base nas Completas e Pendentes"
						icon="arrowDown"
					/>

					<MessageBox
						title={message.title}
						description={message.description}
						footerText={message.footerText}
						icon={message.icon}
					/>

					<PieChartBox data={relationExpensesVersusGains} />
				</Content>
			</Container>
		</Layout>
	)
}

export default Dashboard
