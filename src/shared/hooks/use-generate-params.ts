type Props = {
	page?: number;
	limit?: number;
	searchValue?: string;
};

export function useGenerateParams({ page, limit, searchValue }: Props) {
	let paramString = '?';

	if (page) paramString = paramString.concat(`&page=${page}`);

	if (limit) paramString = paramString.concat(`&limit=${limit}`);

	if (searchValue) paramString = paramString.concat(`&q=${searchValue}`);

	return { paramString: encodeURI(paramString) };
}
