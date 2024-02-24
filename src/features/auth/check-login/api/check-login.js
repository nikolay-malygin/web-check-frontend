import { SERVER_BASE_URL } from 'shared/consts';

const checkLoginFunc = async (access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/authorization/check', {
			headers: { Authorization: access_token },
		});
		const result = await response.json();

		if (response.status === 200) {
			return result.data;
		} else {
			throw new Error(result.message);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

export default checkLoginFunc;
