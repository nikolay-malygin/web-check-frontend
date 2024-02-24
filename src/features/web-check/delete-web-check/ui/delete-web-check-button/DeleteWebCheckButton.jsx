import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton, UiModalWindow } from 'shared/ui';
import { useDeleteButton } from '../../model/useDeleteButton';

const DeleteWebCheckButton = ({ webCheckId }) => {
	const { handleDeleteWebCheck } = useDeleteButton(webCheckId);

	const openDeleteModalButton = (
		<UiButton
			classes={'background-red px-4 py-2 color-white'}
			icon={ICONS.delete}
			data-bs-toggle='modal'
			data-bs-target={`#delete-web-check-${webCheckId}-button`}>
			Löschen
		</UiButton>
	);

	const confirmDeleteModalButton = (
		<UiButton
			onClick={handleDeleteWebCheck}
			classes={'background-red px-3 color-white'}
			data-bs-dismiss='modal'>
			Löschen
		</UiButton>
	);

	return (
		<UiModalWindow
			modalId={`delete-web-check-${webCheckId}-button`}
			modalTitle={'Website-Prüfung löschen'}
			openModalButton={openDeleteModalButton}
			onConfirmButton={confirmDeleteModalButton}
			isCentered={true}>
			Möchten Sie die Website-Prüfung als gelöscht markieren?
		</UiModalWindow>
	);
};

export default DeleteWebCheckButton;
