import React from 'react';
import { useParams } from 'react-router-dom';
import { UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageFormContainer, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { EditProjectForm } from 'widgets/project/edit-project-form';

const ProjectDetailPage = () => {
	const { id } = useParams();
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Projektdetails</UiTitleLarge>
					<PageFormContainer>
						<EditProjectForm projectId={id} />
					</PageFormContainer>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default ProjectDetailPage;
