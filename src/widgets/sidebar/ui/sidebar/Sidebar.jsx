import { useUserData } from 'entities/user/lib/hooks';
import { LogoutIconButton } from 'features/auth';
import React from 'react';
import { ICONS, ROUTES } from 'shared/consts';
import { UiButton, UiLinkButton } from 'shared/ui';
import { adminSidebarLinks, publicSidebarLinks } from 'widgets/sidebar/config/sidebar-links';
import SidebarLink from 'widgets/sidebar/ui/sidebar-link/SidebarLink';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	const { user } = useUserData();

	return (
		<aside
			className='offcanvas-lg offcanvas-start col-lg-3 col-xl-2 px-0 min-vh-100'
			tabIndex='-1'
			id='offcanvasResponsive'>
			<div className={`background-secondary h-100 ${styles.borderRight}`}>
				<div className='offcanvas-header background-secondary'>
					<h5 className='offcanvas-title'>Sidebar</h5>
					<UiButton
						icon={ICONS.close}
						classes={'px-0 color-header'}
						data-bs-dismiss='offcanvas'
						data-bs-target='#offcanvasResponsive'
					/>
				</div>
				<div className={`sticky-top ${styles.bodyHeight}`}>
					<div className='offcanvas-body h-100'>
						<nav
							className={`d-flex flex-column justify-content-between w-100 vh-90 ${styles.bodyHeight}`}>
							<ul className='nav nav-pills flex-column px-3 pt-4 gap-2 w-100 mt-4'>
								{publicSidebarLinks.map(({ route, icon, label }) => (
									<SidebarLink key={route} to={route} icon={icon} label={label} />
								))}
								{user.is_admin === 1 &&
									adminSidebarLinks.map(({ route, icon, label }) => (
										<SidebarLink
											key={route}
											to={route}
											icon={icon}
											label={label}
										/>
									))}
							</ul>
							<div
								className={`d-flex justify-content-center gap-4 mb-4 ${styles.dividerTop} mx-4`}>
								<UiLinkButton
									to={ROUTES.settings}
									icon={ICONS.settings}
									classes={'background-tertiary color-header'}
								/>
								<LogoutIconButton />
							</div>
						</nav>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
