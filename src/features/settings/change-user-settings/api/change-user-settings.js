import { SERVER_BASE_URL } from 'shared/consts';

export const changeUserSettingsFunc = async (userId, new_settings, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + `/users/change/settings/${userId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', Authorization: access_token },
			body: JSON.stringify(new_settings),
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
