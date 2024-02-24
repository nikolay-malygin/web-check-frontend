import { useContext } from 'react';
import { AlertContext } from 'shared/lib/contexts';

const useAlerts = () => {
	const context = useContext(AlertContext);
	if (!context) {
		throw new Error('useAlerts must be used within an AlertProvider');
	}
	return context;
};

export default useAlerts;
