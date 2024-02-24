import { useMutation } from 'react-query';
import { useAlerts } from 'shared/lib/hooks';
import { changeUserSettingsFunc } from './change-user-settings';

const useChangeUserSettingsMutation = () => {
	const { addAlert } = useAlerts();

	return useMutation(
		({ userId, new_settings, access_token }) =>
			changeUserSettingsFunc(userId, new_settings, access_token),
		{
			onSuccess: (message) => {
				addAlert(message, '', 'success');
			},
			onError: (error) => {
				addAlert('Fehler beim Speichern', error.message, 'danger');
			},
		}
	);
};

export default useChangeUserSettingsMutation;
