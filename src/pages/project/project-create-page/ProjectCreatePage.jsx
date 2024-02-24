import { CreateProjectForm } from 'features/project/create-project';
import React from 'react';
import { UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageFormContainer, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';

const ProjectCreatePage = () => {
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Projekt erstellen</UiTitleLarge>
					<PageFormContainer>
						<CreateProjectForm />
					</PageFormContainer>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default ProjectCreatePage;
