// MUI
import { Box, Grid } from '@mui/material';

// API
import { useGetListAnime } from '../api/get-anime-list';

// Component
import { Typography } from '@design-system/components';

//Icons

import { useNavigate } from 'react-router-dom';
import { Table } from '../Table';
// Styles
import styles from './SearchPage.module.scss';

export function SearchPage() {
	// #region hooks
	const navigate = useNavigate();

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
	// #endregion

	// #region data
	const animeListDataSource = animeList.map((data) => {
		return {
			...data,
			key: data.id.toString(),
		};
	});
	// #endregion

	// #region functions
	const navigateToDetail = (id: string) => {
		navigate(`/dashboard/${id}/detail`);
	};
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
				onItemClick={(id) => navigateToDetail(id)}
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
