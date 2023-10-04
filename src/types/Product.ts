import { Customization } from './Customization'
import { UserType } from './UserType'

export interface Product {
	id: number
	status: 'Pendente' | 'Completa' | string
	user: UserType
	customization: Customization
	description: string
}
