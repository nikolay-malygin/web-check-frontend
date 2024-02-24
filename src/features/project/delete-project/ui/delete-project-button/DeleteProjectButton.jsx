import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton, UiModalWindow } from 'shared/ui';
import { useDeleteButton } from '../../model/useDeleteButton';

const DeleteProjectButton = ({ projectId }) => {
	const { handleDeleteProject } = useDeleteButton(projectId);

	const openDeleteModalButton = (
		<UiButton
			classes={'background-red px-4 py-2 color-white'}
			icon={ICONS.delete}
			data-bs-toggle='modal'
			data-bs-target={`#delete-project-${projectId}-button`}>
			Löschen
		</UiButton>
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
			modalId={`delete-project-${projectId}-button`}
			modalTitle={'Projekt löschen'}
			openModalButton={openDeleteModalButton}
			onConfirmButton={confirmDeleteModalButton}
			isCentered={true}>
			Möchten Sie das Projekt löschen?
		</UiModalWindow>
	);
};

export default DeleteProjectButton;
