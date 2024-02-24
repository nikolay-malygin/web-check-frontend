import { useUserData } from 'entities/user/lib/hooks';

export const useSettingsSelectMenu = (setting) => {
	const { user, setUser } = useUserData();

	const handleChangeSelect = (e) => {
		const newSettings = { ...user.settings, [setting]: e.target.value };
		const newUser = { ...user, settings: newSettings };

		setUser(newUser);
	};

	return {
		currentValue: user.settings[setting],
		handleChangeSelect,
	};
};
