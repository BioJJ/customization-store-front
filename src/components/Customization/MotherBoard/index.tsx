import React, { useEffect, useState } from 'react'
import regras from '../../../../regras.json'
import { MotherBoardContainer } from './style'

interface MotherBoardProps {
	onChange: (value: string) => void
}

const MotherBoard: React.FC<MotherBoardProps> = ({ onChange }) => {
	const [placaMae, setPlacaMae] = useState<string | null>(null)

	useEffect(() => {
		// Obtenha as opções de Placa Mãe com base nas regras
		const options = Object.keys(regras.PlacaMae)
		// Atualize o estado com as opções
		setPlacaMae(options[0])
		// Informe o componente pai sobre a seleção
		onChange(options[0])
	}, [onChange])

	const handlePlacaMaeChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedPlacaMae = event.target.value
		setPlacaMae(selectedPlacaMae)
		onChange(selectedPlacaMae)
	}

	return (
		<MotherBoardContainer>
			<h3>Placa Mãe:</h3>
			<select value={placaMae || ''} onChange={handlePlacaMaeChange}>
				{Object.keys(regras.PlacaMae).map((placa) => (
					<option key={placa} value={placa}>
						{placa}
					</option>
				))}
			</select>
		</MotherBoardContainer>
	)
}

export default MotherBoard
