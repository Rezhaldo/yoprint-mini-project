import { Typography } from '@design-system/components';
import { Grid } from '@mui/material';
import styles from './PageNotFound.module.scss';

export function PageNotFound() {
	return (
		<Grid container className={styles.mainContent} gap={2}>
			<Typography
				fontWeight="bold"
				variant="body"
				text="The page you were looking for doesn't exist"
			/>
		</Grid>
	);
}
