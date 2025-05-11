import { forwardRef } from 'react';

// Notistack
import { type CustomContentProps, SnackbarContent, closeSnackbar } from 'notistack';

// Component
import { Button, Typography } from '@design-system/components';

// Styles
import styles from '../Snackbar.module.scss';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

export const InfoSnackbarContent = forwardRef<HTMLDivElement, CustomContentProps>((props, ref) => {
	const { id, message, ...other } = props;

	return (
		<SnackbarContent ref={ref} role="alert" {...other}>
			<div className={`${styles.Container} ${styles.Info}`}>
				<div className={styles.ContentWrapper}>
					<InfoTwoToneIcon />
					<div className={styles.ContentContainer}>
						<Typography text="Information" variant="body" fontWeight="bold" />
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
