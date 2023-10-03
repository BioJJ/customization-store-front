import { useEffect, useState } from 'react'

import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer'

export const useCustomization = () => {
	const [loading, setLoading] = useState(false)
	const { setNotification } = useGlobalReducer()

	useEffect(() => {}, [])

	const newCustomization = async (): Promise<void> => {
		setLoading(true)

		setNotification('Customização Realizado com sucesso!', 'success')

		setLoading(false)
	}

	return {
		loading,
		newCustomization
	}
}
