import { RouteObject } from 'react-router-dom'

import Customization from './'

export enum CustomizationRoutesEnum {
	LIST = '/list/customization',
	CREATE = '/create/customization'
}

export const listCustomization: RouteObject[] = [
	{
		path: CustomizationRoutesEnum.CREATE,
		element: <Customization />
	}
]
