import { useEffect, useState } from 'react'

import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer'
import { Product } from '../../../types/Product'
import { CustomizationUse } from '../../../contexts/customization'

export const useCustomization = () => {
	const [loading, setLoading] = useState(false)
	const { setNotification } = useGlobalReducer()

	const { productsList } = CustomizationUse()

	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		setProducts(productsList)
	}, [productsList])

	return {
		products,
		loading
	}
}
