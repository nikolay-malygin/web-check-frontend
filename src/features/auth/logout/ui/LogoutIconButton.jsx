import React from 'react';
import { ICONS } from 'shared/consts';
import { UiButton } from 'shared/ui';
import { useLogout } from '../model/useLogoutButton';

const LogoutIconButton = () => {
	const { handleLogout } = useLogout();

	return (
		<UiButton
			onClick={handleLogout}
			icon={ICONS.logout}
			classes={'background-tertiary color-red'}
		/>
	);
};

export default LogoutIconButton;
