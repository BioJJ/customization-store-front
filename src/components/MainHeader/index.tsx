import React, { useMemo, useState } from 'react'
import emojis from '../../utils/emoji'

import Toggle from '../Toggle'
import { useTheme } from '../../hooks/theme'

import { Container, Profile, Welcome, UserName } from './style'
import { AuthUse } from '../../contexts/auth'

const MainHeader: React.FC = () => {
	const { toggleTheme, theme } = useTheme()

	const { userLogged } = AuthUse()

	const [darkTheme, setDarkTheme] = useState(() =>
		theme.title === 'dark' ? true : false
	)

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme)
		toggleTheme()
	}

	const emoji = useMemo(() => {
		const indice = Math.floor(Math.random() * emojis.length)
		return emojis[indice]
	}, [])

	return (
		<Container>
			<Toggle
				labelLeft="Light"
				labelRight="Dark"
				checked={darkTheme}
				onChange={handleChangeTheme}
			/>

			<Profile>
				<Welcome>Olá, {emoji} </Welcome>
				<UserName>{userLogged?.name} </UserName>
			</Profile>
		</Container>
	)
}

export default MainHeader
