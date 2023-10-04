import React, { useEffect, useState } from 'react'

import ContentHeader from '../../components/ContentHeader'

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer'

import Layout from '../../components/Layout'

import {
	Container,
	Content,
	ContentButton,
	DescriptionContainer,
	DescriptionTitle,
	SizeButton
} from './style'
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
import ProgressBar from '../../components/Customization/ProgressBar'

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

	const [currentStep, setCurrentStep] = useState(0)

	const steps = [
		{
			component: <MotherBoard onChange={setMotherboard} />,
			label: 'Motherboard'
		},
		{
			component: (
				<Processor onChange={setProcessor} selectedMotherboard={motherboard} />
			),
			label: 'Processor'
		},
		{
			component: (
				<Memory onChange={setMemory} selectedMotherboard={motherboard} />
			),
			label: 'Memory'
		},
		{
			component: (
				<VideoCard onChange={setVideoCard} selectedMotherboard={motherboard} />
			),
			label: 'Video Card'
		},
		{
			component: <HDSSD onChange={setHDSSD} selectedProcessor={processor} />,
			label: 'HD/SSD'
		}
	]

	const currentStepComponent = steps[currentStep].component

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

	const handleNextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1)
		}
	}

	const handlePreviousStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
		}
	}

	return (
		<Layout>
			<Container>
				<ContentHeader
					title={pageData.title}
					lineColor={pageData.lineColor}
				></ContentHeader>

				<Content>
					<ProgressBar currentStep={currentStep} totalSteps={steps.length} />
					<DescriptionContainer>
						<DescriptionTitle>Descrição da Personalização</DescriptionTitle>
						<Input
							type="text"
							placeholder="Descrição da configuração"
							required
							onChange={handleDescription}
						/>
					</DescriptionContainer>

					{description && currentStepComponent && (
						<ContentButton>
							<SizeButton>
								<Button
									loading={loading}
									type="dashed"
									onClick={handleNextStep}
								>
									Next
								</Button>
							</SizeButton>

							<SizeButton>
								<Button
									loading={loading}
									type="dashed"
									onClick={handlePreviousStep}
								>
									Back
								</Button>
							</SizeButton>
						</ContentButton>
					)}

					<ContentButton>
						<SizeButton>
							<Button
								loading={loading}
								type="primary"
								onClick={handleFinishCustomization}
							>
								Finalizar
							</Button>
						</SizeButton>

						<SizeButton>
							<Button
								loading={loading}
								type="link"
								onClick={handleFinishCustomizationLater}
							>
								Salvar mais tarde
							</Button>
						</SizeButton>
					</ContentButton>
				</Content>
			</Container>
		</Layout>
	)
}

export default Customization
