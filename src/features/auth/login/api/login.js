import { SERVER_BASE_URL } from 'shared/consts';

export const loginFunc = async (email, password) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/authorization/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
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
