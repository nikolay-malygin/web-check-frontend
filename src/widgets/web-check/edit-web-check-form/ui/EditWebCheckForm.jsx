import { DeleteWebCheckButton } from 'features/web-check/delete-web-check';
import { UpdateWebCheckButton } from 'features/web-check/edit-web-check';
import React from 'react';
import { UiCheckBox, UiInputFloating, UiTextareaFloating } from 'shared/ui';
import { ButtonBar } from 'shared/ui/layouts';
import { useEditWebCheckForm } from '../model/useEditWebCheckForm';

const EditWebCheckForm = ({ webCheckId }) => {
	const { formData, handleFormChange, handleFormSubmit, isLoading } =
		useEditWebCheckForm(webCheckId);

	return (
		<>
			<h2 className='text-center mb-5'>Website-Prüfung "{formData.check_name}"</h2>
			<form onSubmit={handleFormSubmit}>
				<UiInputFloating
					required
					id={'check_name'}
					name={'check_name'}
					label={'Name der Prüfung'}
					value={formData.check_name}
					onChange={handleFormChange}
				/>
				<UiTextareaFloating
					id={'check_description'}
					name={'check_description'}
					label={'Beschreibung'}
					value={formData.check_description}
					onChange={handleFormChange}
				/>
				<UiInputFloating
					required
					id={'check_method'}
					name={'check_method'}
					label={'Prüfung-Methode'}
					value={formData.check_method}
					onChange={handleFormChange}
				/>
				<UiCheckBox
					id={'is_mandatory'}
					name={'is_mandatory'}
					label={'Obligatorisch'}
					checked={formData.is_mandatory}
					onChange={handleFormChange}
				/>
				<ButtonBar>
					<DeleteWebCheckButton webCheckId={webCheckId} />
					<UpdateWebCheckButton isLoading={isLoading} />
				</ButtonBar>
			</form>
		</>
	);
};

export default EditWebCheckForm;
