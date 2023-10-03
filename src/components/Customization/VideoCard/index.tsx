import React, { useEffect, useState } from 'react'
import rules from '../../../../regras.json'
import { VideoCardContainer } from './style'

interface VideoCardProps {
	selectedMotherboard: string | null
	onChange: (value: string) => void
}

const VideoCard: React.FC<VideoCardProps> = ({
	selectedMotherboard,
	onChange
}) => {
	const [videoCard, setVideoCard] = useState<string | null>(null)
	const [videoCardOptions, setVideoCardOptions] = useState<string[]>([])

	useEffect(() => {
		if (selectedMotherboard) {
			const optionsVideoCardAvailable = Object.keys(rules.PlacaVideo)
			const optionsVideoCardFiltered = optionsVideoCardAvailable.filter(
				(videoCardOptionFilter) =>
					rules.PlacaVideo[videoCardOptionFilter]?.TipoPlacaMae ===
					selectedMotherboard
			)

			setVideoCardOptions(optionsVideoCardFiltered)

			if (!optionsVideoCardFiltered.includes(videoCard || '')) {
				setVideoCard(optionsVideoCardFiltered[0])
				onChange(optionsVideoCardFiltered[0])
			}
		}
	}, [selectedMotherboard, videoCard, onChange])

	const handlePlacaVideoChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedPlacaVideo = event.target.value
		setVideoCard(selectedPlacaVideo)
		onChange(selectedPlacaVideo)
	}

	return (
		<VideoCardContainer>
			<h3>Placa de Vídeo:</h3>
			<select value={videoCard || ''} onChange={handlePlacaVideoChange}>
				{videoCardOptions.map((opcao) => (
					<option key={opcao} value={opcao}>
						{opcao}
					</option>
				))}
			</select>
		</VideoCardContainer>
	)
}

export default VideoCard
