import { createElement } from 'react';
import styles from './heading-h1.module.scss';

// Type
import type { HeadingType } from '../TypographyType';

export default function HeadingH1({ text, element = 'h1', fontWeight, color }: HeadingType) {
	return createElement(
		element,
		{
			className: `${styles['heading-h1']} 
			${styles[`heading-generate-weight--type-${fontWeight}`]}
			${styles[`heading-font-color--type-${color}`]}
			`,
		},
		text,
	);
}
