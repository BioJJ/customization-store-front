import { useState, createContext, useContext, useEffect } from 'react'
import { UserType } from '../../types/UserType'
import {
	getItemStorage,
	setItemStorage
} from '../../functions/connections/storageProxy'

interface AuthProviderProps {
	children: React.ReactNode
}

interface AuthType {
	loading: boolean
	globalLoading: boolean
	logged: boolean
	userLogged: UserType
	LogIn: (email: string, senha: string) => void
	addUser: (user: UserType) => void
	LogOut: () => void
}

export const AuthContext = createContext<AuthType>({} as AuthType)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [loading, setLoading] = useState(false)
	const [globalLoading, setGlobalLoading] = useState(false)
	const [logged, setLogged] = useState<boolean>(false)
	const [userLogged, setUserLogged] = useState<UserType>({} as UserType)
	const [users, setUser] = useState<UserType[]>([])

	useEffect(() => {
		AuthVerify()
	}, [])

	useEffect(() => {
		loadStoredUser()
	}, [])

	const AuthVerify = async () => {
		setGlobalLoading(true)
		try {
			const loggedUser = await getItemStorage('@CustomizationStore:loggedUser')
			if (loggedUser) {
				setUserLogged(JSON.parse(loggedUser))

				setLogged(true)
			}
		} catch (error) {
			setUserLogged({} as UserType)
		} finally {
			setGlobalLoading(false)
		}
	}

	const addUser = async (user: UserType) => {
		setLoading(true)

		setUser((prevQueue) => [...prevQueue, user])

		saveUserToStorage()

		setLoading(false)
	}

	const LogIn = (email: string, password: string) => {
		setLoading(true)

		const userToLogin = users.filter((user) => {
			return email === user?.email && password == user?.password
		})[0]

		if (userToLogin) {
			setUserLogged(userToLogin)

			setItemStorage(
				'@CustomizationStore:loggedUser',
				JSON.stringify(userToLogin)
			)
		}

		setLoading(false)
	}

	const LogOut = () => {
		setLoading(true)

		setLoading(false)
	}

	const saveUserToStorage = () => {
		try {
			setItemStorage('@CustomizationStore:Users', JSON.stringify(users))
		} catch (error) {
			console.error('Erro ao salvar users:', error)
		}
	}

	const loadStoredUser = () => {
		try {
			const storeUsers = getItemStorage('@CustomizationStore:Users')
			if (storeUsers) {
				setUser(JSON.parse(storeUsers))
			}
		} catch (error) {
			console.error('Erro ao carregar user salvos:', error)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				globalLoading,
				loading,
				logged,
				userLogged,
				addUser,
				LogIn,
				LogOut
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const AuthUse = () => {
	const context = useContext(AuthContext)
	return context
}
