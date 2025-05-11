// Material
import { Zoom } from '@mui/material';

// Component
import { CustomSnackBarContent } from '@design-system/components';

// Snackbar
import { SnackbarProvider } from 'notistack';

import ThemeProvider from './theme/ThemeProvider';

// Router
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
	return (
		<SnackbarProvider
			Components={CustomSnackBarContent}
			maxSnack={6}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			TransitionComponent={Zoom}
			autoHideDuration={3000}
		>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
