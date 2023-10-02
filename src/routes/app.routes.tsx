import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import Customization from '../pages/Customization'

export enum DashboardRoutesEnum {
	FIRST_SCREEN = '/dashboard'
}

const AppRoutes: React.FC = () => (
	<Layout>
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/list/components" element={<Customization />} />
		</Routes>
	</Layout>
)

export default AppRoutes
