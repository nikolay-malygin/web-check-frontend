import { SERVER_BASE_URL } from 'shared/consts';

export const getWebCheckById = async (webCheckId, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/webchecks/webcheck/' + webCheckId, {
			headers: { Authorization: access_token },
		});

		const result = await response.json();

		if (response.status === 200) {
			return result.webCheck;
		} else {
			throw new Error(result.message);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
