import { SERVER_BASE_URL } from 'shared/consts';

export const changePasswordFunc = async (userId, access_token, old_password, new_password) => {
	try {
		const response = await fetch(SERVER_BASE_URL + `/users/change/password/${userId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', Authorization: access_token },
			body: JSON.stringify({ old_password, new_password }),
		});

		const result = await response.json();
		if (response.status === 200) {
			return result.message;
		} else {
			throw new Error(result.message);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
