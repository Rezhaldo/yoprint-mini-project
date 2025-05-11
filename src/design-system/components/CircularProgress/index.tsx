// MUI
import { type CircularProgressProps, CircularProgress as MUICircularProgress } from '@mui/material';

// Styles
import styles from './CircularProgress.module.scss';

type Props = {
	circularProgressProps?: CircularProgressProps;
};

export function CircularProgress({ circularProgressProps }: Props) {
	return <MUICircularProgress className={styles.circularProgress} {...circularProgressProps} />;
}
