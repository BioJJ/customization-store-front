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

const Customization: React.FC = () => {
	const { setNotification } = useGlobalReducer()

	const pageData = {
		title: 'Customization Computer',
		lineColor: '#4E41F0'
	}

	const [selectedMotherboard, setSelectedMotherboard] = useState<string>('')
	const [memory, setMemory] = useState<number | null>(null)
	const [processor, setProcessor] = useState<string | null>(null)
	const [hdssd, setHDSSD] = useState<string | null>(null)
	const [videoCard, setVideoCard] = useState<string | null>(null)

	useEffect(() => {}, [])

	return (
		<Layout>
			<Container>
				<ContentHeader
					title={pageData.title}
					lineColor={pageData.lineColor}
				></ContentHeader>

				<Content>
					<MotherBoard onChange={setSelectedMotherboard} />
					<Processor
						onChange={setProcessor}
						selectedMotherboard={selectedMotherboard}
					/>
					<Memory
						onChange={setMemory}
						selectedMotherboard={selectedMotherboard}
					/>
					<VideoCard
						onChange={setVideoCard}
						selectedMotherboard={selectedMotherboard}
					/>
					<HDSSD onChange={setHDSSD} selectedProcessor={processor} />
				</Content>
			</Container>
		</Layout>
	)
}

export default Customization
