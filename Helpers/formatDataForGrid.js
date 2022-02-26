export const formatDataForGrid = (data, numColumns) => {
	const numOfFullRows = Math.floor(data.length / numColumns);
	let numberOfElementsLastRows = data.length - numOfFullRows * numColumns;

	while (numberOfElementsLastRows !== numColumns) {
		data.push({id: `blank-${numberOfElementsLastRows}`, empty: true});
		numberOfElementsLastRows = numberOfElementsLastRows + 1;
	}
	return data;
};
