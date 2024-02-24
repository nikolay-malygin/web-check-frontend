import { LoginForm } from 'features/auth';
import React from 'react';
import { AuthPageLayout } from 'shared/ui/layouts';
import { Header } from 'widgets';

const LoginPage = () => {
	return (
		<>
			<Header hasSidebar={false} />
			<AuthPageLayout>
				<LoginForm />
			</AuthPageLayout>
		</>
	);
};

export default LoginPage;
