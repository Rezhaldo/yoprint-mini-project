import { useCallback, useContext, useState } from 'react';

// MUI
import { Toolbar } from '@mui/material';

// Component
import { Input } from '@design-system/components';

// Context
import { ToolbarContext } from '../context';

// Hooks
import { useDebounce } from '@shared/hooks';

// Styles
import styles from './Toolbar.module.scss';

// Icons
import SearchIcon from '@mui/icons-material/Search';

function TableToolbar() {
	// #region useContext
	const toolBarContext = useContext(ToolbarContext);

	const handleSearchContext = toolBarContext?.handleSearch;
	// #endregion

	// #region useState
	const [searchValue, setSearchValue] = useState<string>('');
	// #endregion

	// #region function
	// biome-ignore lint/correctness/useExhaustiveDependencies: prevent re-render
	const handleUpdateSearch = useCallback(() => {
		handleSearchContext?.(searchValue);
	}, [searchValue]);
	useDebounce(handleUpdateSearch);
	// #endregion

	return (
		<Toolbar>
			{handleSearchContext && (
				<Input
					placeholder={toolBarContext.searchPlaceholder ?? 'Search...'}
					startAdornment={<SearchIcon className={styles.searchIcon} />}
					value={searchValue}
					onChange={setSearchValue}
					textFieldProps={{
						size: 'small',
						fullWidth: true,
					}}
					className={styles.searchInput}
				/>
			)}
		</Toolbar>
	);
}

export default TableToolbar;
