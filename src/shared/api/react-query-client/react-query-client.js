import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
		mutations: {
			refetchOnWindowFocus: false,
		},
	},
});

export default queryClient;
