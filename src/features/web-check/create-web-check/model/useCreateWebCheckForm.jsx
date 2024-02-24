import { getAccessToken } from 'shared/lib/helpers';
import { useForm } from 'shared/lib/hooks';
import { useCreateWebCheckMutation } from '../api/queries';
import { initialFormState } from './initial-form-state';

export const useCreateWebCheckForm = () => {
	const createWebCheckMutation = useCreateWebCheckMutation();
	const { formData, handleFormChange } = useForm(initialFormState);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await createWebCheckMutation.mutateAsync({
				webCheckData: formData,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		formData,
		handleFormChange,
		handleFormSubmit,
		isLoading: createWebCheckMutation.isLoading,
	};
};
