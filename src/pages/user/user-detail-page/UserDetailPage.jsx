import React from 'react';
import { useParams } from 'react-router';
import { UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageFormContainer, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { EditUserForm } from 'widgets/user/edit-user-form';

const UserDetailPage = () => {
	const { id } = useParams();

	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Benutzer</UiTitleLarge>
					<PageFormContainer>
						<EditUserForm userId={id} />
					</PageFormContainer>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default UserDetailPage;
