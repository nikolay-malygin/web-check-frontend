import React from 'react';
import { UiSelectMenu } from 'shared/ui';
import { useSettingsSelectMenu } from '../../model/useSettingsSelectMenu';
import { THEME_SELECT_OPTIONS } from '../config/theme-select-options';
import { useTheme } from '../hooks';

const ChangeThemeSelect = () => {
	const { setTheme } = useTheme();
	const { currentValue, handleChangeSelect } = useSettingsSelectMenu('theme');

	return (
		<UiSelectMenu
			id={'change-theme-select'}
			label={'Theme'}
			options={THEME_SELECT_OPTIONS}
			value={currentValue}
			onChange={(e) => {
				handleChangeSelect(e);
				setTheme(e.target.value);
			}}
		/>
	);
};

export default ChangeThemeSelect;
