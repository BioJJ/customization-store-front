import { RouteObject } from 'react-router-dom'

import CustomizationList from './'

export enum ComponentsRoutesEnum {
	LIST = '/list/customization'
}

export const listComponents: RouteObject[] = [
	{
		path: ComponentsRoutesEnum.LIST,
		element: <CustomizationList />
	}
]
