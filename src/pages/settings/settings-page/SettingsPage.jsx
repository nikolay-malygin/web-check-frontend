import { useUserData } from 'entities/user/lib/hooks';
import { ChangePasswordForm } from 'features/settings/change-password';
import React from 'react';
import { UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageFormContainer, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { ChangeUserSettingsForm } from 'widgets/settings/change-user-settings-form';

const SettingsPage = () => {
	const { user } = useUserData();

	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>
						{user.first_name} {user.last_name}
					</UiTitleLarge>
					<PageFormContainer>
						<ChangePasswordForm />
						<ChangeUserSettingsForm />
					</PageFormContainer>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default SettingsPage;
