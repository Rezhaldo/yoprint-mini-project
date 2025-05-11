import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/system';
import React, { useState } from 'react';
import { themeCreator } from './base';

type Props = {
	children: React.ReactNode;
};

export const ThemeContext = React.createContext((themeName: string): void => {});

const ThemeProviderWrapper: React.FC<Props> = (props) => {
	const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
	const [themeName, _setThemeName] = useState(curThemeName);
	const theme = themeCreator(themeName);
	const setThemeName = (themeName: string): void => {
		localStorage.setItem('appTheme', themeName);
		_setThemeName(themeName);
	};

	return (
		<StyledEngineProvider injectFirst>
			{/* <CacheProvider value={cacheRtl}> */}
			<ThemeContext.Provider value={setThemeName}>
				<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
			</ThemeContext.Provider>
			{/* </CacheProvider> */}
		</StyledEngineProvider>
	);
};

export default ThemeProviderWrapper;
