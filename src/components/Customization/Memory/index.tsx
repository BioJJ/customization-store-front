import React, { useEffect, useState } from 'react'
import regras from '../../../../regras.json'
import { MemoryContainer } from './style'
import SelectInput from '../../SelectInput'

interface MemoryProps {
	selectedMotherboard: string | null
	onChange: (value: number) => void
}

const Memory: React.FC<MemoryProps> = ({ selectedMotherboard, onChange }) => {
	const [memory, setMemory] = useState<number | null>(null)
	const [optionsMemory, setOptionsMemory] = useState<number[]>([])

	useEffect(() => {
		if (selectedMotherboard) {
			const memoryMinimumRequired =
				regras.PlacaMae[selectedMotherboard].MemoriaMinima

			const memoryOptionsAvailable = regras.Memoria

			const optionsMemoryFiltered = memoryOptionsAvailable.filter(
				(memoryOption) => memoryOption >= memoryMinimumRequired
			)

			setOptionsMemory(optionsMemoryFiltered)

			if (!optionsMemoryFiltered.includes(memory || 0)) {
				setMemory(optionsMemoryFiltered[0])
				onChange(optionsMemoryFiltered[0])
			}
		}
	}, [selectedMotherboard, memory, onChange])

	const handleMemoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectMemory = parseInt(event.target.value)
		setMemory(selectMemory)
		onChange(selectMemory)
	}

	return (
		<MemoryContainer>
			<h3>Memória:</h3>

			<SelectInput
				options={optionsMemory}
				onChange={handleMemoryChange}
				defaultValue={memory as number}
				type={true}
			/>
		</MemoryContainer>
	)
}

export default Memory
