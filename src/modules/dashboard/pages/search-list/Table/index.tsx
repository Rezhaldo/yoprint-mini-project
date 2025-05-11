// MUI
import { Box, Grid, TablePagination } from '@mui/material';

// Component
import { CircularProgress, Typography } from '@design-system/components';
import TableToolbar from './Toolbar';

// Context
import { ToolbarContext } from './context';

// Type
import type { TableProps } from './types';

// Styles
import styles from './Table.module.scss';

export function Table<T extends object>({
	toolbarTitle,
	page,
	rowsPerPage,
	dataSource,
	totalRecord,
	isLoading,
	handleSearch,
	onChangePage,
	onChangeRowPerPage,
	onItemClick,
	searchPlaceholder,
}: TableProps<T>) {
	return (
		<Box className={styles.container}>
			<ToolbarContext.Provider
				value={{
					toolbarTitle: toolbarTitle,
					handleSearch,
					searchPlaceholder: searchPlaceholder,
				}}
			>
				<TableToolbar />
			</ToolbarContext.Provider>

			<Box py={2} px={2}>
				<Grid container spacing={2}>
					{dataSource?.map((item) => (
						<Grid
							direction="column"
							container
							alignItems={'center'}
							key={item.key}
							onClick={() => onItemClick?.(item.key)}
						>
							<Box sx={{ width: 225, height: 400, overflow: 'hidden', borderRadius: 2 }}>
								<img
									src={item?.image}
									alt={item?.title}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: 8,
									}}
								/>
							</Box>
							<Typography text={item?.title} variant="body" fontWeight="bold" />
						</Grid>
					))}
				</Grid>
			</Box>

			<Box p={2}>
				<TablePagination
					component="div"
					count={totalRecord}
					onPageChange={(_e, page) => onChangePage?.((page + 1).toString())}
					onRowsPerPageChange={(e) => onChangeRowPerPage?.(e.target.value)}
					page={(page ?? 1) - 1}
					rowsPerPage={rowsPerPage ?? 10}
					rowsPerPageOptions={[10, 20, 50, 100]}
				/>
			</Box>
			{dataSource?.length > 0 && isLoading && (
				<Box className={styles.overlayContainer}>
					<Box className={styles.overlay}>
						<CircularProgress />
					</Box>
				</Box>
			)}
		</Box>
	);
}
