import styled from 'styled-components'

interface ProgressBarFillProps {
	$progressPercentage: number // Defina o tipo corretamente, por exemplo, number
}

export const ProgressBarContainer = styled.div`
	width: 100%;
	height: 20px;
	background-color: #ccc;
	margin-bottom: 20px;
`

export const ProgressBarFill = styled.div<ProgressBarFillProps>`
	height: 100%;
	background-color: #4e41f0;
	width: ${({ $progressPercentage }) => $progressPercentage}%;
	transition: width 0.3s ease-in-out;
`
