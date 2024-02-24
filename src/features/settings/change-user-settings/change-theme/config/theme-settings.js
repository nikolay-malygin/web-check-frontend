import MasterDesignDarkLogo from 'shared/images/master-design-logo-dark.png';
import MasterDesignLightLogo from 'shared/images/master-design-logo-light.png';
import { THEMES } from '../consts/themes';

export const THEME_SETTINGS = {
	[THEMES.lightMode]: {
		MasterDesignLogo: MasterDesignLightLogo,
	},
	[THEMES.darkMode]: {
		MasterDesignLogo: MasterDesignDarkLogo,
	},
	[THEMES.darkModeDarker]: {
		MasterDesignLogo: MasterDesignDarkLogo,
	},
};
