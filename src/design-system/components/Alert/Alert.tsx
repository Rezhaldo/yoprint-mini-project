import { Alert as MuiAlert, type AlertProps as MuiAlertProps } from '@mui/material';

export type AlertStatus = 'error' | 'info' | 'success' | 'warning';
export type AlertProps = {
	open: boolean;
	text: string;
	status: AlertStatus;
	onClose?: () => void;
	alertProps?: MuiAlertProps;
};

export function Alert({ open, status, text, onClose, alertProps }: AlertProps) {
	if (open)
		return (
			<MuiAlert sx={{ mt: 2 }} severity={status} onClose={onClose} {...alertProps}>
				{text}
			</MuiAlert>
		);

	return <></>;
}
