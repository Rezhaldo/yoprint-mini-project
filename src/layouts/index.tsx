import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from './Header';

interface AccentSidebarLayoutProps {
	children?: React.ReactNode;
}

const AccentSidebarLayout: React.FC<AccentSidebarLayoutProps> = () => {
	const theme = useTheme();

	return (
		<>
			<Header />
			<Box
				sx={{
					position: 'relative',
					zIndex: 5,
					flex: 1,
					display: 'flex',
					pt: `${theme.header.height}`,
					px: 2,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flex: 1,
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<Box flexGrow={1}>
						<Outlet />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AccentSidebarLayout;
