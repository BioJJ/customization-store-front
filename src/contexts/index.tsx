import React from 'react'
import { CustomizationProvider } from './customization'
import { AuthProvider } from './auth'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<CustomizationProvider>{children}</CustomizationProvider>
		</AuthProvider>
	)
}
