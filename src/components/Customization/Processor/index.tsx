import React, { useEffect, useState } from 'react'
import regras from '../../../../regras.json'
import { ProcessorContainer } from './style'
import SelectInput from '../../SelectInput'

interface ProcessadorProps {
	selectedMotherboard: string | null
	onChange: (value: string) => void
}

const Processor: React.FC<ProcessadorProps> = ({
	selectedMotherboard,
	onChange
}) => {
	const [processor, setProcessor] = useState<string | null>(null)
	const [processorList, setProcessorList] = useState<string[]>([])

	useEffect(() => {
		if (selectedMotherboard) {
			const compatible = regras.PlacaMae[selectedMotherboard].Processador
			setProcessorList(compatible)
			if (!compatible.includes(processor || '')) {
				setProcessor(compatible[0])
				onChange(compatible[0])
			}
		}
	}, [selectedMotherboard, processor, onChange])

	const handleProcessadorChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedProcessador = event.target.value
		setProcessor(selectedProcessador)
		onChange(selectedProcessador)
	}

	return (
		<ProcessorContainer>
			<h3>Processador:</h3>

			<SelectInput
				options={processorList}
				onChange={handleProcessadorChange}
				defaultValue={processor as string}
			/>
		</ProcessorContainer>
	)
}

export default Processor
