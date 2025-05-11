import { Navigate } from 'react-router-dom';
import AccentSidebarLayout from '../../layouts/index';

// Pages
import { AnimeDetail } from './pages/anime-detail';
import { SearchPage } from './pages/search-list/ui/SearchPage';

export const dashboardRouter = {
	path: '/dashboard',
	element: <AccentSidebarLayout />,
	children: [
		{ index: true, element: <Navigate to="list" replace /> },
		{
			path: 'list',
			element: <SearchPage />,
		},
		{
			path: ':id/detail',
			element: <AnimeDetail />,
		},
	],
};
