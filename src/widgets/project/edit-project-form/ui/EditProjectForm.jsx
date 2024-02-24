import { DeleteProjectButton } from 'features/project/delete-project';
import { UpdateProjectButton } from 'features/project/edit-project';
import React from 'react';
import { UiCheckBox, UiInputFloating, UiTextareaFloating } from 'shared/ui';
import { ButtonBar } from 'shared/ui/layouts';
import { useEditProjectForm } from '../model/useEditProjectForm';

const EditProjectForm = ({ projectId }) => {
	const { formData, handleFormChange, handleFormSubmit, isLoading } = useEditProjectForm(projectId);

	return (
		<>
			<h5>Von {formData.first_name} {formData.last_name}</h5>
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
				<UiCheckBox
					id={'is_finished'}
					name={'is_finished'}
					label={'Abgeschlossen'}
					checked={formData.is_finished}
					onChange={handleFormChange}
				/>
				<ButtonBar>
					<DeleteProjectButton projectId={projectId} />
					<UpdateProjectButton isLoading={isLoading} />
				</ButtonBar>
			</form>
		</>
	);
};

export default EditProjectForm;
