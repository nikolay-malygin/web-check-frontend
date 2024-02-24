import { useUserData } from 'entities/user/lib/hooks';
import { THEMES } from '../consts/themes';

const useTheme = () => {
	const { user } = useUserData();

	const setTheme = (theme) => {
		const htmlElement = document.querySelector('html');
		htmlElement.classList.value = '';
		htmlElement.classList.add(theme);
	};

	const getTheme = () => {
		if (user && user.settings && user.settings.theme) {
			return user.settings.theme;
		} else {
			const theme = document.querySelector('html').classList[0];
			return theme ? theme : THEMES.lightMode;
		}
	};

	return {
		setTheme,
		getTheme,
	};
};

export default useTheme;
