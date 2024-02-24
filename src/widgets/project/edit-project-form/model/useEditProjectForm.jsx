import { useProjectByIdQuery } from 'entities/project/api';
import { useEffect } from 'react';
import { getAccessToken } from 'shared/lib/helpers';
import { useForm } from 'shared/lib/hooks';
import { initialFormState } from './initial-form-state';
import { useEditProjectMutation } from 'features/project/edit-project';

export const useEditProjectForm = (projectId) => {
	const { formData, handleFormChange, setFormData } = useForm(initialFormState);
	const { projectData, isLoading } = useProjectByIdQuery(projectId, getAccessToken());
	const editProjectMutation = useEditProjectMutation();

	useEffect(() => {
		if (projectData) {
			setFormData(projectData);
		}
	}, [projectData]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await editProjectMutation.mutateAsync({
				projectId,
				projectData: formData,
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
