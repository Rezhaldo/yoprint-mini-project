import type { ElementType, ReactNode } from 'react';
import type { FontWeightType, TypographyColorVariant, TypographyVariant } from './TypographyType';

import HeadingBody from './heading-body';
import HeadingSubtitle from './heading-subtitle';

type TypographyProps = {
	variant: TypographyVariant;
	as?: ElementType;
	text: string | ReactNode;
	fontWeight: FontWeightType;
	color?: TypographyColorVariant;
};

export function Typography({
	variant,
	text,
	color = 'default',
	as: element,
	fontWeight,
}: TypographyProps) {
	const typography = {
		body: <HeadingBody text={text} element={element} fontWeight={fontWeight} color={color} />,
		subtitle: (
			<HeadingSubtitle text={text} element={element} fontWeight={fontWeight} color={color} />
		),
	};

	return typography[variant];
}
