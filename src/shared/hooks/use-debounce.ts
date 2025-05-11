import { useEffect } from 'react';

export function useDebounce(callbackHandler: () => void, options = { delay: 500 }) {
	useEffect(() => {
		const handler = setTimeout(() => {
			callbackHandler();
		}, options.delay);

		return () => clearTimeout(handler);
	}, [callbackHandler, options.delay]);
}
