export const add_comma = (input) => {
	// input = input.toString();
	// var pattern = /(-?\d+)(\d{3})/;
	// while (pattern.test(input)) input = input.replace(pattern, "$1,$2");
	var commas = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return commas;
};
