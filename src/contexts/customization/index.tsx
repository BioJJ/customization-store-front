import { useState, createContext, useContext, useEffect } from 'react'
import { Product } from '../../types/Product'
import {
	getItemStorage,
	setItemStorage
} from '../../functions/connections/storageProxy'

interface CustomizationProviderProps {
	children: React.ReactNode
}

interface CustomizationType {
	loading: boolean
	globalLoading: boolean
	productsList: Product[]
	AddCustomization(product: Product): void
}

export const CustomizationContext = createContext<CustomizationType>(
	{} as CustomizationType
)

export const CustomizationProvider: React.FC<CustomizationProviderProps> = ({
	children
}) => {
	const [loading, setLoading] = useState(false)
	const [globalLoading, setGlobalLoading] = useState(false)
	const [productsList, setProductsList] = useState<Product[]>([])

	useEffect(() => {
		CustomizationVerify()
	}, [])

	useEffect(() => {
		loadStoredProduct()
	}, [])

	const CustomizationVerify = () => {
		setGlobalLoading(true)

		setGlobalLoading(false)
	}

	const AddCustomization = (product: Product) => {
		try {
			setLoading(true)
			console.log(product)

			setProductsList((prevQueue) => [...prevQueue, product])

			saveProductToStorage()
		} catch (error) {
			console.error(JSON.stringify(error))
		} finally {
			setLoading(false)
		}
	}

	const saveProductToStorage = () => {
		try {
			setItemStorage(
				'@CustomizationStore:Products',
				JSON.stringify(productsList)
			)
		} catch (error) {
			console.error('Erro ao salvar Products:', error)
		}
	}

	const loadStoredProduct = () => {
		try {
			const storeProducts = getItemStorage('@CustomizationStore:Products')
			if (storeProducts) {
				setProductsList(JSON.parse(storeProducts))
			}
		} catch (error) {
			console.error('Erro ao carregar user salvos:', error)
		}
	}

	return (
		<CustomizationContext.Provider
			value={{
				globalLoading,
				loading,
				productsList,
				AddCustomization
			}}
		>
			{children}
		</CustomizationContext.Provider>
	)
}

export const CustomizationUse = () => {
	const context = useContext(CustomizationContext)
	return context
}
