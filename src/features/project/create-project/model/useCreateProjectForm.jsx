import { useUserData } from 'entities/user/lib/hooks';
import { getAccessToken } from 'shared/lib/helpers';
import { useForm } from 'shared/lib/hooks';
import { useCreateProjectMutation } from '../api/queries';

export const useCreateProjectForm = () => {
	const createProjectMutation = useCreateProjectMutation();
	const { user } = useUserData();
	const { formData, handleFormChange } = useForm({
		user_id: user.user_id,
		project_name: '',
		project_description: '',
		project_url: '',
		is_permanent: 0,
	});

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await createProjectMutation.mutateAsync({
				projectData: formData,
				access_token: getAccessToken(),
			});
		} catch (error) {}
	};

	return {
		formData,
		handleFormChange,
		handleFormSubmit,
		isLoading: createProjectMutation.isLoading,
	};
};
