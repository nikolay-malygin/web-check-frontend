import { SERVER_BASE_URL } from 'shared/consts';

export const createProjectFunc = async (projectData, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/projects/create', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: access_token },
			body: JSON.stringify(projectData),
		});

		const result = await response.json();

		if (response.status === 201) {
			return result.message;
		} else {
			throw new Error(result.message);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
