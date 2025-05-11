// MUI
import { Box, Grid } from '@mui/material';

// API
import { useGetListAnime } from './api/get-anime-list';

// Component
import { Typography } from '@design-system/components';

//Icons

// Styles
import styles from './SearchPage.module.scss';
import { Table } from './Table';

export function SearchPage() {
	const {
		animeList,
		isLoading,
		alertUI,
		totalAnime,
		page,
		rowsPerPage,
		onChangePage,
		onChangeRowPerPage,
		handleSearch,
	} = useGetListAnime();

	// #region data
	const animeListDataSource = animeList.map((data) => {
		return {
			...data,
			key: data.id.toString(),
		};
	});
	// #endregion

	return (
		<Grid container direction="column" className={styles.Container} spacing={3}>
			<Grid container className={styles.TopSection}>
				<Box className={styles.TitleContainer}>
					<Typography text="Dashboard" variant="h1" fontWeight="bold" />
					<Typography
						text="Find your favorite anime and manga"
						variant="body"
						fontWeight="regular"
					/>
				</Box>
			</Grid>
			{alertUI}
			<Table<AnimeType>
				isLoading={isLoading}
				dataSource={animeListDataSource}
				columns={[]}
				totalRecord={totalAnime}
				toolbarTitle="Anime List"
				handleSearch={handleSearch}
				// pagination
				page={page}
				rowsPerPage={rowsPerPage}
				onChangePage={onChangePage}
				onChangeRowPerPage={onChangeRowPerPage}
				searchPlaceholder={'Search Anime...'}
			/>
		</Grid>
	);
}

type AnimeType = {
	image: string;
	title: string;
	key: string;
};
