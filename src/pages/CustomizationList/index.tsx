import React from 'react'

import ContentHeader from '../../components/ContentHeader'

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer'

import Layout from '../../components/Layout'

import { useNavigate } from 'react-router-dom'

import { ButtonInit, Container, Content } from './style'
import { CustomizationRoutesEnum } from '../Customization/routes'
import HistoryFinanceCard from '../../components/Dashboard/HistoryFinanceCard'
import formatCurrency from '../../utils/formatCurrency'
import { useCustomization } from './hooks/useCustomization'

const CustomizationList: React.FC = () => {
	const { setNotification } = useGlobalReducer()
	const navigate = useNavigate()

	const { products } = useCustomization()
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

					{products.map((item) => (
						<HistoryFinanceCard
							key={Math.random()}
							tagColor={item.status == 'completo' ? '#4E41F0' : '#f70202'}
							title={item.description}
							subtitle={item.user.name}
							amount={item.status}
							text={`${item.customization.motherboard} - ${item.customization.processor} - ${item.customization.videoCard} | ${item.customization.hdssd}`}
						/>
					))}
				</Content>
			</Container>
		</Layout>
	)
}

export default CustomizationList
