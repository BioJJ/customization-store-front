import React, { useEffect, useState } from 'react'
import regras from '../../../../regras.json'
import { HDSSDContainer } from './style'

interface HDSSDProps {
	selectedProcessor: string | null
	onChange: (value: string) => void
}

interface HDSSDType {
	description: string
	value: number
}

const HDSSD: React.FC<HDSSDProps> = ({ selectedProcessor, onChange }) => {
	const [hdssd, setHDSSD] = useState<string | null>(null)
	const [optionsHDSSD, setOptionsHDSSD] = useState<HDSSDType[]>([])

	useEffect(() => {
		if (selectedProcessor) {
			const isI9 = selectedProcessor === 'i9'

			const capacityMinimumRequired = isI9
				? regras.Processador.i9.HDSSDMinimo
				: 256

			const optionsHDSSDAvailable = regras.HDSSD

			const optionsHDSSDFiltered = optionsHDSSDAvailable.filter(
				(HDSSDOption) => HDSSDOption.value >= capacityMinimumRequired
			)

			setOptionsHDSSD(optionsHDSSDFiltered)

			if (
				!optionsHDSSDFiltered.some((option) => option.description === hdssd)
			) {
				setHDSSD(optionsHDSSDFiltered[0].description)
				onChange(optionsHDSSDFiltered[0].description)
			}
		}
	}, [selectedProcessor, hdssd, onChange])

	const handleHDSSDChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedHDSSD = event.target.value
		setHDSSD(selectedHDSSD)
		onChange(selectedHDSSD)
	}

	return (
		<HDSSDContainer>
			<h3>HD/SSD:</h3>
			<select value={hdssd || ''} onChange={handleHDSSDChange}>
				{optionsHDSSD.map((option) => (
					<option key={option.description} value={option.description}>
						{option.description} ({option.value} GB)
					</option>
				))}
			</select>
		</HDSSDContainer>
	)
}

export default HDSSD
