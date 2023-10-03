import React, { useEffect, useState } from 'react'
import regras from '../../../../regras.json'
import { MemoryContainer } from './style'

interface MemoryProps {
	selectedMotherboard: string | null
	onChange: (value: number) => void
}

const Memory: React.FC<MemoryProps> = ({ selectedMotherboard, onChange }) => {
	const [memory, setMemory] = useState<number | null>(null)
	const [optionsMemory, setOptionsMemory] = useState<number[]>([])

	useEffect(() => {
		if (selectedMotherboard) {
			// Obtenha a memória mínima necessária com base na placa mãe selecionada
			const memoryMinimumRequired =
				regras.PlacaMae[selectedMotherboard].MemoriaMinima

			// Obtenha as opções de memória com base na memória mínima necessária
			const memoryOptionsAvailable = regras.Memoria

			const optionsMemoryFiltered = memoryOptionsAvailable.filter(
				(memoryOption) => memoryOption >= memoryMinimumRequired
			)

			// Atualize o estado com as opções de memória
			setOptionsMemory(optionsMemoryFiltered)

			// Se a memória atual não estiver na lista de opções, redefina-a
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
			<select value={memory || ''} onChange={handleMemoryChange}>
				{optionsMemory.map((opcao) => (
					<option key={opcao} value={opcao}>
						{opcao} GB
					</option>
				))}
			</select>
		</MemoryContainer>
	)
}

export default Memory
