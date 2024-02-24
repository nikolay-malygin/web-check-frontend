import React from 'react';
import { PageContentLayout, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';

const ProjectCheckPage = () => {
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					ProjectCheckPage
					<div className='min-vh-100 background-blue'></div>
					<div className='min-vh-100 background-green'></div>
					<div className='min-vh-100 background-blue'></div>
					<div className='min-vh-100 background-green'></div>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default ProjectCheckPage;
