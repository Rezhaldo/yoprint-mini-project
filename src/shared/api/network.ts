// Libs
import axios, { AxiosError } from 'axios';

const APIClient = axios.create({
	baseURL: import.meta.env.VITE_SERVER_DOMAIN,
	headers: {
		// biome-ignore lint/style/useNamingConvention: <"Accept" was the default props for Axios>
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export async function post({ path, data }: { path: string; data?: unknown }) {
	try {
		const response = await APIClient.post(path, data);

		return {
			status: response.status,
			data: response.data,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status === 401) {
				window.location.href = '/';
			}
			return {
				status: error.response?.status || 404,
				error: error.response?.data,
			};
		}
		return { status: 404, error: error as Error };
	}
}

export async function get(path: string) {
	try {
		const response = await APIClient.get(path);
		if (response.status !== 200) throw new Error(response.data.message);

		return {
			status: response.status,
			data: response.data,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status === 401) {
				window.location.href = '/';
			}

			return {
				status: error.response?.status || 404,
				error: error.response?.data || error,
			};
		}
		return { status: 404, error: error as Error };
	}
}
