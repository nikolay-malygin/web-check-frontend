import { useUserByIdQuery } from 'entities/user/api';
import { useEditUserMutation } from 'features/user/edit-user';
import { useEffect } from 'react';
import { useForm } from 'shared/lib/hooks';
import { initialFormState } from './initial-form-state';
import { getAccessToken } from 'shared/lib/helpers';

export const useEditUserForm = (userId) => {
	const { formData, handleFormChange, setFormData } = useForm(initialFormState);
	const { userData, isLoading } = useUserByIdQuery(userId, getAccessToken());
	const editUserMutation = useEditUserMutation();

	useEffect(() => {
		if (userData) {
			setFormData({ ...userData, new_password: '' });
		}
	}, [userData]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await editUserMutation.mutateAsync({
				userId,
				userData: formData,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		formData,
		handleFormChange,
		handleFormSubmit,
		isLoading,
	};
};
