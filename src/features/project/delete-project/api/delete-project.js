import { SERVER_BASE_URL } from 'shared/consts';

export const deleteProjectFunc = async (projectId, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/projects/' + projectId, {
			method: 'DELETE',
			headers: { Authorization: access_token },
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
