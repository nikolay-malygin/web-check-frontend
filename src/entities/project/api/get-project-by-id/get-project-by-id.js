import { SERVER_BASE_URL } from 'shared/consts';

export const getProjectById = async (projectId, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/projects/project/' + projectId, {
			headers: { Authorization: access_token },
		});

		const result = await response.json();

		if (response.status === 200) {
			return result.project;
		} else {
			throw new Error(result.message);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
