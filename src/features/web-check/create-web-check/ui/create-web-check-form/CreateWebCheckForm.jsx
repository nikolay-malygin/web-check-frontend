import React from 'react';
import { UiCheckBox, UiInputFloating, UiTextareaFloating } from 'shared/ui';
import { ButtonBar } from 'shared/ui/layouts';
import { useCreateWebCheckForm } from '../../model/useCreateWebCheckForm';
import CreateWebCheckButton from '../create-web-check-button/CreateWebCheckButton';

const CreateWebCheckForm = () => {
	const { formData, handleFormChange, handleFormSubmit, isLoading } = useCreateWebCheckForm();

	return (
		<>
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
					label={'Prüfungs-Methode'}
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
					<CreateWebCheckButton isLoading={isLoading} />
				</ButtonBar>
			</form>
		</>
	);
};

export default CreateWebCheckForm;
