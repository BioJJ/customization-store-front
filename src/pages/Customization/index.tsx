import React from 'react'

import ContentHeader from '../../components/ContentHeader'

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer'

import Layout from '../../components/Layout'

import { ButtonFile, Container, Content, FileUploadContainer } from './style'

export interface SelectedFile {
	name: string
	size: number
	type: string
}

const Customization: React.FC = () => {
	const { setNotification } = useGlobalReducer()

	const pageData = {
		title: 'Customization Computer',
		lineColor: '#4E41F0'
	}

	const handleCustomization = () => {
		setNotification('Customização Iniciada!', 'success')
	}

	return (
		<Layout>
			<Container>
				<ContentHeader
					title={pageData.title}
					lineColor={pageData.lineColor}
				></ContentHeader>

				<FileUploadContainer>
					<>
						<ButtonFile onClick={handleCustomization}>
							Iniciar Customização
						</ButtonFile>
					</>
				</FileUploadContainer>

				<Content>
					{/* {transactionFiltered.map((item) => (
						<HistoryFinanceCard
							key={item.id}
							tagColor={'#4E41F0'}
							title={item.description}
							subtitle={item.seller}
							amount={formatCurrency(Number(item.value))}
						/>
					))} */}
				</Content>
			</Container>
		</Layout>
	)
}

export default Customization
