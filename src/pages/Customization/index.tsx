import React, { useEffect, useState } from 'react'

import ContentHeader from '../../components/ContentHeader'

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer'

import Layout from '../../components/Layout'

import { Container, Content } from './style'
import MotherBoard from '../../components/Customization/MotherBoard'
import Processor from '../../components/Customization/Processor'
import Memory from '../../components/Customization/Memory'
import VideoCard from '../../components/Customization/VideoCard'
import HDSSD from '../../components/Customization/HDSSD'
import Button from '../../components/Button'
import { CustomizationUse } from '../../contexts/customization'
import { Customization } from '../../types/Customization'
import { AuthUse } from '../../contexts/auth'
import Input from '../../components/Input'

const Customization: React.FC = () => {
	const { setNotification } = useGlobalReducer()
	const { userLogged } = AuthUse()

	const { loading, AddCustomization } = CustomizationUse()

	const pageData = {
		title: 'Customization Computer',
		lineColor: '#4E41F0'
	}

	const [motherboard, setMotherboard] = useState<string>('')
	const [memory, setMemory] = useState<number | null>(null)
	const [processor, setProcessor] = useState<string | null>(null)
	const [hdssd, setHDSSD] = useState<string | null>(null)
	const [videoCard, setVideoCard] = useState<string | null>(null)

	const [description, setDescription] = useState<string>('')

	const [customization, setCustomization] = useState<Customization>(
		{} as Customization
	)

	useEffect(() => {
		setCustomization({
			motherboard,
			memory,
			processor,
			hdssd,
			videoCard
		})
	}, [motherboard, memory, processor, hdssd, videoCard])

	const addProduct = (status: string) => {
		if (description) {
			AddCustomization({
				status,
				user: userLogged,
				customization,
				description
			})

			setNotification('Salvo com sucesso', 'success')

			setDescription('')
		} else {
			setNotification('Campos Obrigatorios', 'error')
		}
	}

	const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value)
	}

	const handleFinishCustomization = () => {
		addProduct('Completo')
	}

	const handleFinishCustomizationLater = () => {
		addProduct('Pendente')
	}

	return (
		<Layout>
			<Container>
				<ContentHeader
					title={pageData.title}
					lineColor={pageData.lineColor}
				></ContentHeader>

				<Content>
					<Input
						type="text"
						placeholder="Descrição da configuração"
						required
						onChange={handleDescription}
					/>
					<MotherBoard onChange={setMotherboard} />
					<Processor
						onChange={setProcessor}
						selectedMotherboard={motherboard}
					/>
					<Memory onChange={setMemory} selectedMotherboard={motherboard} />
					<VideoCard
						onChange={setVideoCard}
						selectedMotherboard={motherboard}
					/>
					<HDSSD onChange={setHDSSD} selectedProcessor={processor} />

					<Button
						loading={loading}
						type="primary"
						margin="10px 0px 10px 0px"
						onClick={handleFinishCustomization}
					>
						Finalizar
					</Button>

					<Button
						loading={loading}
						type="primary"
						margin="10px 0px 10px 0px"
						onClick={handleFinishCustomizationLater}
					>
						Salvar mais tarde
					</Button>
				</Content>
			</Container>
		</Layout>
	)
}

export default Customization
