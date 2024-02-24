import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton } from 'shared/ui';

const UiModalWindow = ({
	modalId,
	modalTitle,
	openModalButton,
	onConfirmButton,
	isCentered = false,
	children,
}) => {
	return (
		<>
			{openModalButton}
			<div
				id={modalId}
				className='modal fade'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-hidden='true'>
				<div className={`modal-dialog ${isCentered && 'modal-dialog-centered'}`}>
					<div className='modal-content background-secondary'>
						<div className='modal-header border-0'>
							<h1 className='modal-title title fs-5' id={`${modalId}Label`}>
								{modalTitle}
							</h1>
							<UiButton
								classes='color-header'
								data-bs-dismiss='modal'
								icon={ICONS.close}
							/>
						</div>
						<div className='modal-body border-0'>{children}</div>
						<div className='modal-footer border-0'>
							<UiButton
								classes={'background-tertiary color-header'}
								data-bs-dismiss='modal'>
								Abbrechen
							</UiButton>
							{onConfirmButton}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UiModalWindow;
