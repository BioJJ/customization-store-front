import { Customization } from './Customization'
import { UserType } from './UserType'

export interface Product {
	status: 'Pendente' | 'Completa' | string
	user: UserType
	customization: Customization
	description: string
}
