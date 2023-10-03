import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.tsx'
import { ThemeProvider } from './hooks/theme'

import store from './store'
import { AppProvider } from './contexts/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<AppProvider>
					<App />
				</AppProvider>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
)
