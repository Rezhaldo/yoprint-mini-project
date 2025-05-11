import { Alert } from '@design-system/components';
import { APIClient } from '@shared/api';
import { useGenerateParams } from '@shared/hooks/use-generate-params';
import { useEffect, useState } from 'react';
import { Anime, type AnimeDTO } from '../models/animeList';

async function getListAnime(param?: string) {
	const res = await APIClient.get(`/anime${param ? `?${param}` : ''}`);
	if (res.error) {
		return Promise.resolve({ data: [], totalsAnime: 0 });
	}

	const result = res.data;
	const animeList = result.data;
	const totalsAnime = result.pagination?.items?.total ?? animeList.length;

	return Promise.resolve({ data: animeList, totalsAnime });
}

export function useGetListAnime() {
	// #region hooks
	const [alertAPI, alertUI] = Alert.useAlert();
	// #endregion

	const [animeList, setAnimeList] = useState<Anime[]>([]);
	const [totalAnime, setTotalAnime] = useState<number>(0);
	const [page, setPage] = useState<number>(1);
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);
	const [searchValue, setSearchValue] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const handleSearch = (value: string) => {
		setPage(1);
		setSearchValue(value);
	};

	const onChangePage = (value: string) => {
		setIsLoading(true);
		setPage(Number(value) ?? 1);
	};

	const onChangeRowPerPage = (value: string) => {
		setPage(1);
		setIsLoading(true);
		setRowsPerPage(Number(value) ?? 1);
	};

	// #region hooks
	const { paramString } = useGenerateParams({
		searchValue,
		page,
		limit: rowsPerPage,
	});
	// #endregion

	// biome-ignore lint/correctness/useExhaustiveDependencies: getList changes on every re-render and should not be used as a hook dependency
	useEffect(() => {
		getListAnime(paramString)
			.then((res: { data: AnimeDTO[]; totalsAnime: number }) => {
				const animeModels = res?.data?.map((anime) => new Anime(anime));

				setAnimeList(animeModels ?? []);
				setTotalAnime(res?.totalsAnime ?? 0);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [searchValue, page, rowsPerPage]);

	return {
		animeList,
		totalAnime,
		isLoading,
		page,
		rowsPerPage,
		alertUI,
		onChangePage,
		onChangeRowPerPage,
		handleSearch,
	};
}
