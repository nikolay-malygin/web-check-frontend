const getAccessToken = () => {
	return localStorage.getItem('access_token');
};

export default getAccessToken;
