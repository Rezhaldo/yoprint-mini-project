import { forwardRef } from 'react';

// Notistack
import { type CustomContentProps, SnackbarContent, closeSnackbar } from 'notistack';

// Component
import { Button, Typography } from '@design-system/components';

// Styles
import styles from '../Snackbar.module.scss';

// Icons
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CloseIcon from '@mui/icons-material/Close';

export const SuccessSnackbarContent = forwardRef<HTMLDivElement, CustomContentProps>(
	(props, ref) => {
		const { id, message, ...other } = props;

		return (
			<SnackbarContent ref={ref} role="alert" {...other}>
				<div className={`${styles.Container} ${styles.Success}`}>
					<div className={styles.ContentWrapper}>
						<CheckCircleTwoToneIcon />
						<div className={styles.ContentContainer}>
							<Typography text="Success" variant="body" fontWeight="bold" />
							{message}
						</div>
					</div>
					<Button
						variant="text"
						onClick={() => closeSnackbar(id)}
						buttonProps={{
							className: styles.Button,
						}}
					>
						<CloseIcon />
					</Button>
				</div>
			</SnackbarContent>
		);
	},
);
