import { useUserData } from 'entities/user/lib/hooks';
import { useTheme } from 'features/settings/change-user-settings/change-theme/hooks';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { useAlerts } from 'shared/lib/hooks';
import { loginFunc } from './login';

export const useLoginMutation = () => {
	const { setTheme, getTheme } = useTheme();
	const { addAlert } = useAlerts();
	const { login } = useUserData();
	const navigate = useNavigate();

	return useMutation(({ email, password }) => loginFunc(email, password), {
		onSuccess: (data) => {
			login(data.access_token, data.user);
			navigate(ROUTES.welcome);
			setTheme(getTheme());
		},
		onError: (error) => {
			addAlert('Fehler beim Login', error.message, 'danger');
		},
	});
};
