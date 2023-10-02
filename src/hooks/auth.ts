import { useState } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { DashboardRoutesEnum } from '../routes/app.routes'
import { useGlobalReducer } from '../store/reducers/globalReducer/useGlobalReducer'
import {
	// ERROR_INVALID_PASSWORD,
	ERROR_USER_CREATE
} from '../constants/errorStatus'

// import { User } from '../types/User'
import { LoginRoutesEnum } from '../routes/auth.routes'
import { UserType } from '../types/UserType'

export const useRequests = () => {
	const [loading, setLoading] = useState(false)
	const { setNotification, setUser, user } = useGlobalReducer()

	const authRequest = async (
		navigate: NavigateFunction,
		body: UserType
	): Promise<void> => {
		setLoading(true)

		console.log(body)

		setUser({
			id: user?.id,
			name: user?.name,
			email: user?.email,
			password: user?.password
		})

		navigate(DashboardRoutesEnum.FIRST_SCREEN)

		setLoading(false)
	}

	const newUserRequest = async (
		navigate: NavigateFunction,
		body: UserType
	): Promise<void> => {
		setLoading(true)

		console.log(body)

		setUser({
			id: Math.random(),
			name: body.name,
			email: body.email,
			password: body.password
		})

		console.log(user)

		setNotification(
			'Cadastro Realizado com sucesso!',
			'success',
			'realize o login!!'
		)
		navigate(LoginRoutesEnum.LOGIN)
		// setNotification(ERROR_USER_CREATE, 'error')

		setLoading(false)
	}

	return {
		loading,
		authRequest,
		newUserRequest
	}
}
