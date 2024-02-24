import { LinkToProjectForm } from 'features/project/create-project';
import React from 'react';
import { Pagination, UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { DataGrid } from 'widgets/data-grid';
import { projectConfig } from 'widgets/data-grid/config';
import useProjectsPage from './model/useProjectsPage';

const ProjectsPage = () => {
	const { projects, totalPages, currentPage, refetch, setCurrentPage } = useProjectsPage();

	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Projekte</UiTitleLarge>
					<LinkToProjectForm />
					<DataGrid
						data={projects}
						config={projectConfig}
						keyExtractor={(project) => project.project_id}
					/>
					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
						refetch={refetch}
						setCurrentPage={setCurrentPage}
					/>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default ProjectsPage;
