import { NavigateFunction } from 'react-router-dom'

import { LoginRoutesEnum } from '../../routes/auth.routes'
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants'
import {
	getItemStorage,
	removeItemStorage,
	setItemStorage
} from './storageProxy'

export const unsetAuthorizationToken = () =>
	removeItemStorage(AUTHORIZATION_KEY)

export const setAuthorizationToken = (token?: string) => {
	if (token) {
		setItemStorage(AUTHORIZATION_KEY, token)
	}
}

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY)

export const logout = (navigate: NavigateFunction) => {
	unsetAuthorizationToken()
	navigate(LoginRoutesEnum.LOGIN)
}
