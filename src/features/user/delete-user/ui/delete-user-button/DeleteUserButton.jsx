import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton, UiModalWindow } from 'shared/ui';
import { useDeleteButton } from '../../model/useDeleteButton';

const DeleteUserButton = ({ userId }) => {
	const { handleDeleteUser } = useDeleteButton(userId);

	const openDeleteModalButton = (
		<UiButton
			classes={'background-red px-4 py-2 color-white'}
			icon={ICONS.delete}
			data-bs-toggle='modal'
			data-bs-target={`#delete-user-${userId}-button`}>
			Löschen
		</UiButton>
	);

	const confirmDeleteModalButton = (
		<UiButton
			onClick={handleDeleteUser}
			classes={'background-red px-3 color-white'}
			data-bs-dismiss='modal'>
			Löschen
		</UiButton>
	);

	return (
		<UiModalWindow
			modalId={`delete-user-${userId}-button`}
			modalTitle={'Benutzer löschen'}
			openModalButton={openDeleteModalButton}
			onConfirmButton={confirmDeleteModalButton}
			isCentered={true}>
			Möchten Sie den Benutzer löschen?
		</UiModalWindow>
	);
};

export default DeleteUserButton;
