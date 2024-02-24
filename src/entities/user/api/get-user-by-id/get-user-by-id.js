import { SERVER_BASE_URL } from 'shared/consts';

export const getUserById = async (userId, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/users/user/' + userId, {
			headers: { Authorization: access_token },
		});

		const result = await response.json();

		if (response.status === 200) {
			return result.user;
		} else {
			throw new Error(result.message);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};