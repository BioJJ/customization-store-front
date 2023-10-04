import { ProgressBarContainer, ProgressBarFill } from './style'

interface ProgressBarProps {
	currentStep: number
	totalSteps: number
}
const ProgressBar: React.FC<ProgressBarProps> = ({
	currentStep,
	totalSteps
}) => {
	const progressPercentage = ((currentStep + 1) / totalSteps) * 100

	return (
		<ProgressBarContainer>
			<ProgressBarFill $progressPercentage={progressPercentage} />
		</ProgressBarContainer>
	)
}

export default ProgressBar
