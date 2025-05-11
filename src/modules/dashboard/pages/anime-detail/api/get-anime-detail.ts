import { APIClient } from '@shared/api';
import { useEffect, useState } from 'react';

import { AnimeDetail, type AnimeDetailDTO } from '../models/anime-detail';

export async function getAnimeDetails(animeId: string) {
	const res = await APIClient.get(`/anime/${animeId}/full`);

	if (res.error) {
		return Promise.reject(res.error);
	}
	return Promise.resolve(res.data);
}

export function useGetAnimeDetails(companyId: string) {
	const [animeDetail, setAnimeDetail] = useState<AnimeDetail | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	//#region useEffect

	useEffect(() => {
		getAnimeDetails(companyId)
			.then((res: { data: AnimeDetailDTO }) => {
				const animeModel = new AnimeDetail(res.data);
				setAnimeDetail(animeModel);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [companyId]);

	//#endregion

	return {
		isLoading,
		animeDetail,
	};
}
