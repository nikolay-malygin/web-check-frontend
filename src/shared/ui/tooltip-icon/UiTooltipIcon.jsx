import React from 'react';
import { Tooltip as BootstrapTooltip, OverlayTrigger } from 'react-bootstrap';
import { ICONS } from 'shared/consts';

const UiTooltipIcon = ({ icon, tooltip, placement, classes, ...props }) => {
	return (
		<OverlayTrigger
			placement={placement ? placement : 'top'}
			overlay={<BootstrapTooltip>{tooltip}</BootstrapTooltip>}>
			<i {...props} className={`${icon ? icon : ICONS.info} ${classes && classes}`} />
		</OverlayTrigger>
	);
};

export default UiTooltipIcon;
