import { type ReactElement, useMemo, useState } from 'react';
import { Alert, type AlertProps } from './Alert';

type Notify = (message: string, fixed?: boolean) => void;
type AlertAPI = {
	[Status in Exclude<AlertProps['status'], undefined>]: Notify;
};
type AlertConfig = {
	open: boolean;
	message: string;
	status: AlertProps['status'];
	fixed: boolean;
};

export function useAlert(): [AlertAPI, ReactElement] {
	const [config, setConfig] = useState<AlertConfig>({
		open: false,
		message: '',
		status: 'error',
		fixed: true,
	});

	const holder = useMemo(
		() => (
			<Alert
				open={config.open}
				onClose={config.fixed ? undefined : () => setConfig((c) => ({ ...c, open: false }))}
				text={config.message}
				status={config.status}
			/>
		),
		[config.open, config.message, config.status, config.fixed],
	);

	const api: AlertAPI = {
		success: (message, fixed) => {
			setConfig({ open: true, message, status: 'success', fixed: fixed ?? config.fixed });
		},
		error: (message, fixed) => {
			setConfig({ open: true, message, status: 'error', fixed: fixed ?? config.fixed });
		},
		warning: (message, fixed) => {
			setConfig({ open: true, message, status: 'warning', fixed: fixed ?? config.fixed });
		},
		info: (message, fixed) => {
			setConfig({ open: true, message, status: 'info', fixed: fixed ?? config.fixed });
		},
	};

	return [api, holder];
}
