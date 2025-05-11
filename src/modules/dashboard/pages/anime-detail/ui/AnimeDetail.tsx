// MUI
import { Box, Card, Divider, Grid } from '@mui/material';

// API
import { useGetAnimeDetails } from '../api/get-anime-detail';

// Component
import { Button, CircularProgress, Typography } from '@design-system/components';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigate, useParams } from 'react-router-dom';
// Styles
import styles from './AnimeDetail.module.scss';

export function AnimeDetail() {
	// #region hooks
	const navigate = useNavigate();
	const { id } = useParams();
	const { animeDetail, isLoading } = useGetAnimeDetails(id ?? '');
	// #endregion

	// #region data
	// #endregion

	// #region functions
	const navigateGoBack = () => {
		navigate(`/dashboard/list`);
	};
	// #endregion

	if (isLoading) return <CircularProgress />;

	return (
		<Grid container direction="column" className={styles.Container} spacing={3}>
			<Grid container className={styles.TopSection}>
				<Box className={styles.TitleContainer}>
					<Typography text="Anime Detail" variant="h1" fontWeight="bold" />
				</Box>
				<Grid container>
					<Button color="primary" variant="contained" onClick={navigateGoBack}>
						<ArrowBackIcon />
						Back
					</Button>
				</Grid>
			</Grid>

			<Grid container size={12} spacing={2}>
				<Grid size={{ md: 4, xs: 12 }}>
					<Box className="LeftPanel">
						<Typography text={animeDetail?.title} variant="h1" fontWeight="bold" />
						<img
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: 8,
							}}
							src={animeDetail?.image}
							alt={animeDetail?.title}
						/>
					</Box>
				</Grid>
				<Grid size={{ md: 8, xs: 12 }}>
					<Card className={styles.Card}>
						<Grid className={styles.CardContentContainer}>
							<Typography text="Synopsis" variant="h1" fontWeight="bold" />
						</Grid>
						<Divider />
						<Grid className={styles.CardContentContainer}>
							<Typography text={animeDetail?.synopsis} variant="body" fontWeight="regular" />
						</Grid>
					</Card>

					<Box className={`${styles.StatusContainer} ${styles[`StatusContainer-rating`]}`}>
						<Typography
							text={animeDetail?.rating}
							variant="body"
							fontWeight="semibold"
							color="default"
						/>
					</Box>
					<Box className={`${styles.StatusContainer} ${styles[`StatusContainer-episode`]}`}>
						<Typography
							text={`Episodes ${animeDetail?.episodes}`}
							variant="body"
							fontWeight="semibold"
							color="default"
						/>
					</Box>
					<Box className={`${styles.StatusContainer} ${styles[`StatusContainer-active`]}`}>
						<Typography
							text={animeDetail?.status}
							variant="body"
							fontWeight="semibold"
							color="default"
						/>
					</Box>
					<Box className={`${styles.StatusContainer} ${styles[`StatusContainer-popular`]}`}>
						<Typography
							text={`#Popularity ${animeDetail?.popularity}`}
							variant="body"
							fontWeight="semibold"
							color="default"
						/>
					</Box>
					<Box className={`${styles.StatusContainer} ${styles[`StatusContainer-rank`]}`}>
						<Typography
							text={`#Rank ${animeDetail?.rank}`}
							variant="body"
							fontWeight="semibold"
							color="default"
						/>
					</Box>
					<Box className={`${styles.StatusContainer} ${styles[`StatusContainer-favorite`]}`}>
						<Typography
							text={`#Favorite ${animeDetail?.favorites}`}
							variant="body"
							fontWeight="semibold"
							color="default"
						/>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
}
