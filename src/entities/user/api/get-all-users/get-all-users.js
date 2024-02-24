import { SERVER_BASE_URL } from 'shared/consts';

export const getAllUsers = async (access_token, page = 1, limit = 2) => {
	try {
		const response = await fetch(SERVER_BASE_URL + `/users?page=${page}&limit=${limit}`, {
			headers: { Authorization: access_token },
		});

		const result = await response.json();

		if (response.status === 200) {
			return result;
		} else {
			throw new Error(result.message);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
