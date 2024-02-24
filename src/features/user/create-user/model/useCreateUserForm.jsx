import { useForm } from 'shared/lib/hooks';
import { useCreateUserMutation } from '../api/queries';
import { getAccessToken } from 'shared/lib/helpers';
import { initialFormState } from './initial-form-state';

export const useCreateUserForm = () => {
	const createUserMutation = useCreateUserMutation();
	const { formData, handleFormChange } = useForm(initialFormState);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await createUserMutation.mutateAsync({
				userData: formData,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		formData,
		handleFormChange,
		handleFormSubmit,
		isLoading: createUserMutation.isLoading,
	};
};
