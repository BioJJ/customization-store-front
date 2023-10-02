import { RouteObject } from 'react-router-dom'

import List from './'

export enum ComponentsRoutesEnum {
	LIST = '/list/components',
	TRANSACTION_LIST = '/components',
	TRANSACTION_INSERT = '/components/parse-create',
	TRANSACTION_EDIT = '/components/:transactionId'
}

export const listComponents: RouteObject[] = [
	{
		path: ComponentsRoutesEnum.LIST,
		element: <List />
	}
]
