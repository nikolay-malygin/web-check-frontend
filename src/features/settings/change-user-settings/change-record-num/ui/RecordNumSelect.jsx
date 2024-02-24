import React from 'react';
import { UiSelectMenu } from 'shared/ui';
import { RECORD_NUM_OPTIONS } from '../config/record-num-options';
import { useSettingsSelectMenu } from '../../model/useSettingsSelectMenu';

const RecordNumSelect = () => {
	const { currentValue, handleChangeSelect } = useSettingsSelectMenu('record_num');

	return (
		<UiSelectMenu
			id={'record-num-select'}
			label={'Anzahl der Datensätze'}
			value={currentValue}
			onChange={handleChangeSelect}
			options={RECORD_NUM_OPTIONS}
		/>
	);
};

export default RecordNumSelect;
