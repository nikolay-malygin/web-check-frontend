import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton, UiModalWindow } from 'shared/ui';
import { useDeleteButton } from '../../model/useDeleteButton';

const DeleteUserIcon = ({ userId }) => {
	const { handleDeleteUser } = useDeleteButton(userId);

	const openDeleteModalButton = (
		<UiButton
			classes={'background-red color-white'}
			icon={ICONS.delete}
			data-bs-toggle='modal'
			data-bs-target={`#delete-user-${userId}-icon`}
		/>
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
			modalId={`delete-user-${userId}-icon`}
			modalTitle={'Benutzer löschen'}
			openModalButton={openDeleteModalButton}
			onConfirmButton={confirmDeleteModalButton}
			isCentered={true}>
			<p className='text-start'>Möchten Sie den Benutzer löschen?</p>
		</UiModalWindow>
	);
};

export default DeleteUserIcon;
