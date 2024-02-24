import { useState } from 'react';

const useForm = (initialState) => {
	const [formData, setFormData] = useState(initialState);

	const handleFormChange = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData((prev) => {
			if (type === 'checkbox') {
				return { ...prev, [name]: checked ? 1 : 0 };
			} else {
				return { ...prev, [name]: value };
			}
		});
	};

	const resetForm = () => {
		setFormData(initialState);
	};

	return { formData, handleFormChange, resetForm, setFormData };
};

export default useForm;
