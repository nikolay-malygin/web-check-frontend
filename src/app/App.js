import React from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from 'shared/api';
import { AlertContainer } from 'widgets';
import AppRouter from './AppRouter';
import { AlertProvider } from './providers/AlertProvider';
import { UserProvider } from './providers/UserProvider';
import './styles/global.css';
import './styles/themes.css';

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<UserProvider>
					<AlertProvider>
						<AlertContainer />
						<AppRouter />
					</AlertProvider>
				</UserProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
