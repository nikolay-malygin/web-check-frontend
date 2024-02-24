import React from 'react';
import { PageContentLayout, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { LastProjectsContainer } from 'widgets/project';
import WelcomeText from './ui/WelcomeText';

const WelcomePage = () => {
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<WelcomeText />
					<LastProjectsContainer />
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default WelcomePage;
