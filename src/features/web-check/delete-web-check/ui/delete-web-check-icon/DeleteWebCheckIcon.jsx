import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton, UiModalWindow } from 'shared/ui';
import { useDeleteButton } from '../../model/useDeleteButton';

const DeleteWebCheckIcon = ({ webCheckId }) => {
	const { handleDeleteWebCheck } = useDeleteButton(webCheckId);

	const openDeleteModalButton = (
		<UiButton
			classes={'background-red color-white'}
			icon={ICONS.delete}
			data-bs-toggle='modal'
			data-bs-target={`#delete-web-check-${webCheckId}-icon`}
		/>
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
			modalId={`delete-web-check-${webCheckId}-icon`}
			modalTitle={'Website-Prüfung löschen'}
			openModalButton={openDeleteModalButton}
			onConfirmButton={confirmDeleteModalButton}
			isCentered={true}>
			<p className='text-start'>Möchten Sie die Website-Prüfung als gelöscht markieren?</p>
		</UiModalWindow>
	);
};

export default DeleteWebCheckIcon;
