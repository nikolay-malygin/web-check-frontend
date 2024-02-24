import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton, UiModalWindow } from 'shared/ui';
import { useDeleteButton } from '../../model/useDeleteButton';

const DeleteProjectIcon = ({ projectId }) => {
	const { handleDeleteProject } = useDeleteButton(projectId);

	const openDeleteModalButton = (
		<UiButton
			classes={'background-red color-white'}
			icon={ICONS.delete}
			data-bs-toggle='modal'
			data-bs-target={`#delete-project-${projectId}-icon`}
		/>
	);

	const confirmDeleteModalButton = (
		<UiButton
			onClick={handleDeleteProject}
			classes={'background-red px-3 color-white'}
			data-bs-dismiss='modal'>
			Löschen
		</UiButton>
	);

	return (
		<UiModalWindow
			modalId={`delete-project-${projectId}-icon`}
			modalTitle={'Projekt löschen'}
			openModalButton={openDeleteModalButton}
			onConfirmButton={confirmDeleteModalButton}
			isCentered={true}>
			<p className='text-start'>Möchten Sie das Projekt löschen?</p>
		</UiModalWindow>
	);
};

export default DeleteProjectIcon;
