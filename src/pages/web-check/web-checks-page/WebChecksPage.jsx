import { LinkToWebCheckForm } from 'features/web-check/create-web-check';
import React from 'react';
import { Pagination, UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { DataGrid } from 'widgets/data-grid';
import useWebChecksPage from './model/useWebChecksPage';
import { webCheckConfig } from 'widgets/data-grid/config';

const WebChecksPage = () => {
	const { webChecks, totalPages, currentPage, refetch, setCurrentPage } = useWebChecksPage();
	
	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Website-Prüfungen</UiTitleLarge>
					<LinkToWebCheckForm />
					<DataGrid
						data={webChecks}
						config={webCheckConfig}
						keyExtractor={(webCheck) => webCheck.check_id}
					/>
					<Pagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
						refetch={refetch}
					/>
				</PageContentLayout>
			</PageLayout>
		</>
	);
};

export default WebChecksPage;
