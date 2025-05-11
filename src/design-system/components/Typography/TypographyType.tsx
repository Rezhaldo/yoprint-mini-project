import type { ElementType, ReactNode } from 'react';

export type FontWeightType = 'regular' | 'medium' | 'semibold' | 'bold';
export type TypographyVariant = 'body' | 'subtitle';
export type TypographyColorVariant = 'default' | 'warning' | 'info' | 'success' | 'error' | 'brand';
export type HeadingType = {
	text: string | ReactNode;
	element?: ElementType;
	fontWeight: FontWeightType;
	color?: TypographyColorVariant;
};
