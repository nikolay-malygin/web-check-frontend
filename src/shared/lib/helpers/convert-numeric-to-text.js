const convertNumericToText = (data) => {
	let retVal = data;

	if (Number.isInteger(data)) {
		return Number(data) === 1 ? 'Ja' : 'Nein';
	}

	return retVal;
};

export default convertNumericToText;
