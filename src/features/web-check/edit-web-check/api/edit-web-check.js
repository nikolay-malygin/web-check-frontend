import { SERVER_BASE_URL } from 'shared/consts';

export const editWebCheckFunc = async (webCheckId, webCheckData, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/webchecks/edit/' + webCheckId, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', Authorization: access_token },
			body: JSON.stringify(webCheckData),
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
