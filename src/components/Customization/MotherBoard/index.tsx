import React, { useEffect, useState } from 'react'
import regras from '../../../../regras.json'
import { MotherBoardContainer } from './style'
import SelectInput from '../../SelectInput'

interface MotherBoardProps {
	onChange: (value: string) => void
}

const MotherBoard: React.FC<MotherBoardProps> = ({ onChange }) => {
	const [placaMae, setPlacaMae] = useState<string | null>(null)

	useEffect(() => {
		const options = Object.keys(regras.PlacaMae)
		setPlacaMae(options[0])
		onChange(options[0])
	}, [onChange])

	const handlePlacaMaeChange = (event: string) => {
		const selectedPlacaMae = event
		setPlacaMae(selectedPlacaMae)
		onChange(selectedPlacaMae)
	}

	return (
		<MotherBoardContainer>
			<h3>Placa Mãe:</h3>

			<SelectInput
				options={Object.keys(regras.PlacaMae)}
				onChange={(e) => handlePlacaMaeChange(e.target.value)}
				defaultValue={placaMae as string}
			/>
		</MotherBoardContainer>
	)
}

export default MotherBoard
