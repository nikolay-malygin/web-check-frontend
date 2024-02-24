import { getAccessToken } from 'shared/lib/helpers';
import { useDeleteWebCheckMutation } from '../api/queries';

export const useDeleteButton = (webCheckId) => {
	const deleteWebCheckMutation = useDeleteWebCheckMutation();

	const handleDeleteWebCheck = async (e) => {
		try {
			await deleteWebCheckMutation.mutateAsync({
				webCheckId,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		handleDeleteWebCheck,
	};
};
