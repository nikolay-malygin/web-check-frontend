import { LinkToUserForm } from 'features/user/create-user';
import React from 'react';
import { Pagination, UiTitleLarge } from 'shared/ui';
import { PageContentLayout, PageLayout } from 'shared/ui/layouts';
import { Header, Sidebar } from 'widgets';
import { DataGrid } from 'widgets/data-grid';
import { userConfig } from 'widgets/data-grid/config';
import useUsersPage from './model/useUsersPage';

const UsersPage = () => {
	const { users, totalPages, currentPage, refetch, setCurrentPage } = useUsersPage();

	return (
		<>
			<Header />
			<PageLayout>
				<Sidebar />
				<PageContentLayout>
					<UiTitleLarge>Benutzer</UiTitleLarge>
					<LinkToUserForm />
					<DataGrid
						data={users}
						config={userConfig}
						keyExtractor={(user) => user.user_id}
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

export default UsersPage;
