import { useWebCheckByIdQuery } from 'entities/web-check/api';
import { useEditWebCheckMutation } from 'features/web-check/edit-web-check';
import { useEffect } from 'react';
import { getAccessToken } from 'shared/lib/helpers';
import { useForm } from 'shared/lib/hooks';
import { initialFormState } from './initial-form-state';

export const useEditWebCheckForm = (webCheckId) => {
	const { formData, handleFormChange, setFormData } = useForm(initialFormState);
	const { webCheckData, isLoading } = useWebCheckByIdQuery(webCheckId, getAccessToken());
	const editWebCheckMutation = useEditWebCheckMutation();

	useEffect(() => {
		if (webCheckData) {
			setFormData(webCheckData);
		}
	}, [webCheckData]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await editWebCheckMutation.mutateAsync({
				webCheckId,
				webCheckData: formData,
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
