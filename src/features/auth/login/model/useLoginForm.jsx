import { useForm } from 'shared/lib/hooks';
import { useLoginMutation } from '../api/queries';

export const useLoginForm = () => {
	const loginMutation = useLoginMutation();
	const { formData, handleFormChange } = useForm({
		email: '',
		password: '',
	});

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await loginMutation.mutateAsync({
				email: formData.email,
				password: formData.password,
			});
		} catch (error) {}
	};

	return { formData, handleFormChange, handleLogin, isLoading: loginMutation.isLoading };
};
