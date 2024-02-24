import React from 'react';
import { UiCheckBox, UiInputFloating, UiTextareaFloating } from 'shared/ui';
import { ButtonBar } from 'shared/ui/layouts';
import { useCreateProjectForm } from '../../model/useCreateProjectForm';
import CreateProjectButton from '../create-project-button/CreateProjectButton';

const CreateProjectForm = () => {
	const { formData, handleFormChange, handleFormSubmit, isLoading } = useCreateProjectForm();

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<UiInputFloating
					required
					id={'project_name'}
					name={'project_name'}
					label={'Projektname'}
					value={formData.project_name}
					onChange={handleFormChange}
				/>
				<UiTextareaFloating
					id={'project_description'}
					name={'project_description'}
					label={'Beschreibung'}
					value={formData.project_description}
					onChange={handleFormChange}
				/>
				<UiInputFloating
					required
					id={'project_url'}
					type={'url'}
					name={'project_url'}
					label={'Projekt-URL'}
					value={formData.project_url}
					onChange={handleFormChange}
				/>
				<UiCheckBox
					id={'is_permanent'}
					name={'is_permanent'}
					label={'Permanent'}
					checked={formData.is_permanent}
					onChange={handleFormChange}
				/>
				<ButtonBar>
					<CreateProjectButton isLoading={isLoading} />
				</ButtonBar>
			</form>
		</>
	);
};

export default CreateProjectForm;
