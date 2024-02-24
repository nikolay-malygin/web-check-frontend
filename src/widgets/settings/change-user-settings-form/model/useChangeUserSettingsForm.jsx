import { useUserData } from 'entities/user/lib/hooks';
import { useChangeUserSettingsMutation } from 'features/settings/change-user-settings';
import { getAccessToken } from 'shared/lib/helpers';

export const useChangeUserSettingsForm = () => {
	const { user } = useUserData();
	const changeUserSettingsMutation = useChangeUserSettingsMutation();

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await changeUserSettingsMutation.mutateAsync({
				userId: user.user_id,
				new_settings: user.settings,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		handleFormSubmit,
		isLoading: changeUserSettingsMutation.isLoading,
	};
};
