import type { Theme } from '@mui/material';
import { PureLightTheme } from './schemes/PureLightThemes';

declare module '@mui/material/styles' {
	interface Theme {
		header: {
			height: string;
			background: string;
			boxShadow: string;
			textColor: string;
		};
		sidebar: {
			width: string;
		};
	}

	interface ThemeOptions {
		header?: {
			height?: string;
			background?: string;
			boxShadow?: string;
			textColor?: string;
		};
		sidebar?: {
			width?: string;
		};
	}
}

const themeMap: { [key: string]: Theme } = {
	PureLightTheme,
};

export function themeCreator(theme: string): Theme {
	return themeMap[theme];
}
