import { forwardRef } from 'react';

// Notistack
import { type CustomContentProps, SnackbarContent, closeSnackbar } from 'notistack';

// Component
import { Button, Typography } from '@design-system/components';

// Styles
import styles from '../Snackbar.module.scss';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

export const ErrorSnackbarContent = forwardRef<HTMLDivElement, CustomContentProps>((props, ref) => {
	const { id, message, ...other } = props;

	return (
		<SnackbarContent ref={ref} role="alert" {...other}>
			<div className={`${styles.Container} ${styles.Error}`}>
				<div className={styles.ContentWrapper}>
					<HighlightOffTwoToneIcon />
					<div className={styles.ContentContainer}>
						<Typography text="Failed" variant="body" fontWeight="bold" />
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
});
