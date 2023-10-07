import { useState } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { DashboardRoutesEnum } from '../routes/app.routes'
import { useGlobalReducer } from '../store/reducers/globalReducer/useGlobalReducer'

import { LoginRoutesEnum } from '../routes/auth.routes'
import { UserType } from '../types/UserType'
import { AuthUse } from '../contexts/auth'
import { removeItemStorage } from '../functions/connections/storageProxy'

export const useRequests = () => {
	const [loading, setLoading] = useState(false)
	const { setNotification } = useGlobalReducer()

	const { addUser, LogIn, userLogged } = AuthUse()

	const authRequest = async (
		navigate: NavigateFunction,
		email: string,
		password: string
	): Promise<void> => {
		setLoading(true)

		LogIn(email, password)

		if (userLogged) {
			setNotification('Login Realizado com sucesso!', 'success')

			navigate(DashboardRoutesEnum.FIRST_SCREEN)
		} else {
			setNotification('Verifique os dados do login!', 'warning')
		}

		setLoading(false)
	}

	const newUserRequest = async (
		navigate: NavigateFunction,
		body: UserType
	): Promise<void> => {
		setLoading(true)

		addUser(body)

		setNotification(
			'Cadastro Realizado com sucesso!',
			'success',
			'realize o login!!'
		)
		navigate(LoginRoutesEnum.LOGIN)

		setLoading(false)
	}

	const logout = (navigate: NavigateFunction) => {
		setLoading(true)
		removeItemStorage('@CustomizationStore:loggedUser')
		navigate(LoginRoutesEnum.LOGIN)
		setLoading(false)
	}

	return {
		loading,
		authRequest,
		newUserRequest,
		logout
	}
}
