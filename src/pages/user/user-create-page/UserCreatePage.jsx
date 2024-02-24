import { CreateUserForm } from 'features/user/create-user';
import React from 'react';
import { UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageFormContainer, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';

const UserCreatePage = () => {
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Benutzer erstellen</UiTitleLarge>
					<PageFormContainer>
						<CreateUserForm />
					</PageFormContainer>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default UserCreatePage;
