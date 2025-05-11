import { Navigate } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';

import AccentSidebarLayout from '../../layouts/index';

export const dashboardRouter = {
	path: '/dashboard',
	element: <AccentSidebarLayout />,
	children: [
		{ index: true, element: <Navigate to="list" replace /> },
		{
			path: 'list',
			element: <SearchPage />,
		},
	],
};
