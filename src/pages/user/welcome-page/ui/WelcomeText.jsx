import { useUserData } from 'entities/user/lib/hooks';
import React from 'react';
import { UiTitleLarge } from 'shared/ui';

const WelcomeText = () => {
	const { user } = useUserData();

	return (
		<>
			<UiTitleLarge>
				Willkommen, {user.first_name} {user.last_name}!
			</UiTitleLarge>
			<p className='text-center px-sm-3 px-md-5 mx-xl-5'>
				Herzlich willkommen bei "web check" - Ihrer zentralen Plattform für die Überprüfung
				von Website-Projekten. Nutzen Sie die umfassenden Prüfungsalgorithmen, um die
				Qualität und Performance Ihrer Websites zu verbessern. "web check" unterstützt Sie
				dabei, mögliche Fehler zu identifizieren und die Benutzererfahrung Ihrer Besucher zu
				maximieren.
			</p>
		</>
	);
};

export default WelcomeText;
