import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContentLayout, PageFormContainer, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { EditWebCheckForm } from 'widgets/web-check/edit-web-check-form';

const WebCheckDetailPage = () => {
	const { id } = useParams();

	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<PageFormContainer>
						<EditWebCheckForm webCheckId={id} />
					</PageFormContainer>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default WebCheckDetailPage;
