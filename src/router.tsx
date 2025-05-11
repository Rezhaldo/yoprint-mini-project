import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PageNotFound } from '@shared/ui/PageNotFound';
import { dashboardRouter } from './modules/dashboard';

export const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <Navigate to="/dashboard" replace />,
			},
			{
				path: '*',
				element: <PageNotFound />,
			},
		],
	},
	dashboardRouter,
]);
