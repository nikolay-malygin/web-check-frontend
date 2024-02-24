import { THEME_SETTINGS } from 'features/settings/change-user-settings/change-theme/config';
import { useTheme } from 'features/settings/change-user-settings/change-theme/hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS, ROUTES } from 'shared/consts';
import WebCheckLogo from 'shared/images/web-check-logo.png';
import { UiButton } from 'shared/ui';

const Header = ({ hasSidebar = true }) => {
	const { getTheme } = useTheme();

	return (
		<header className='navbar background-secondary border-tertiary py-1'>
			<div className='container-fluid d-flex justify-content-between mx-md-5'>
				<div>
					{hasSidebar && (
						<UiButton
							classes='d-lg-none mx-sm-3 ms-md-0 p-0 color-header'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasResponsive'
							icon={`${ICONS.menu}`}
						/>
					)}
					<Link
						to={'https://www.masterdesign.at/'}
						target='_blank'
						className='navbar-brand'>
						<img
							src={THEME_SETTINGS[getTheme()].MasterDesignLogo}
							width={130}
							alt='master design Logo'
						/>
					</Link>
				</div>

				<Link to={ROUTES.welcome} className='navbar-brand'>
					<img src={WebCheckLogo} width={155} alt='web check Logo' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
