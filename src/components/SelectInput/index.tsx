import React from 'react'

import { Container, Select } from './style'

interface ISelectInputProps {
	options: string[] | number[]
	onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined
	defaultValue?: string | number
	type?: boolean
}

const SelectInput: React.FC<ISelectInputProps> = ({
	options,
	onChange,
	defaultValue,
	type
}) => (
	<Container>
		<Select onChange={onChange} defaultValue={defaultValue}>
			{options.map((option) => (
				<option key={option} value={option}>
					{type && <> {option} GB</>}

					{!type && <> {option}</>}
				</option>
			))}
		</Select>
	</Container>
)

export default SelectInput
