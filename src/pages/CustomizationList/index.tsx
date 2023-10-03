import React from 'react'

import ContentHeader from '../../components/ContentHeader'

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer'

import Layout from '../../components/Layout'

import { useNavigate } from 'react-router-dom'

import { ButtonInit, Container, Content } from './style'
import { CustomizationRoutesEnum } from '../Customization/routes'
import HistoryFinanceCard from '../../components/Dashboard/HistoryFinanceCard'
import formatCurrency from '../../utils/formatCurrency'

const CustomizationList: React.FC = () => {
	const { setNotification } = useGlobalReducer()
	const navigate = useNavigate()

	const pageData = {
		title: 'Customization List',
		lineColor: '#4E41F0'
	}

	const handleCustomization = () => {
		setNotification('Customização Iniciada!', 'success')

		navigate(CustomizationRoutesEnum.CREATE)
	}

	return (
		<Layout>
			<Container>
				<ContentHeader
					title={pageData.title}
					lineColor={pageData.lineColor}
				></ContentHeader>
				<Content>
					<ButtonInit onClick={handleCustomization}>
						Iniciar Customização
					</ButtonInit>

					{/* {transactionFiltered.map((item) => ( */}
					<HistoryFinanceCard
						tagColor={'#4E41F0'}
						title={'PC GAMER'}
						subtitle={'Rosinha'}
						amount={formatCurrency(Number(6000))}
					/>
					{/* // ))} */}
				</Content>
			</Container>
		</Layout>
	)
}

export default CustomizationList
