import { CreateWebCheckForm } from 'features/web-check/create-web-check';
import React from 'react';
import { UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageFormContainer, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';

const WebCheckCreatePage = () => {
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Website-Prüfung erstellen</UiTitleLarge>
					<PageFormContainer>
						<CreateWebCheckForm />
					</PageFormContainer>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default WebCheckCreatePage;
