import { useEffect, useState } from 'react'

import { Product } from '../../../types/Product'
import { CustomizationUse } from '../../../contexts/customization'

export const useCustomization = () => {
	const [loading, setLoading] = useState(false)

	const { productsList } = CustomizationUse()

	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		setLoading(true)
		setProducts(productsList)
		setLoading(false)
	}, [productsList])

	return {
		products,
		loading
	}
}
