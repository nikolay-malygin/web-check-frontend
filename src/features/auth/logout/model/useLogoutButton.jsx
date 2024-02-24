import { useUserData } from 'entities/user/lib/hooks';

export const useLogout = () => {
	const { logout } = useUserData();

	const handleLogout = (e) => {
		logout();
	};

	return { handleLogout };
};
