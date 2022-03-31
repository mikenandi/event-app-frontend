export const remove_comma = (input) => {
	input = input.toString();
	input = input.replace(/\,/gi, "");
	input = input.replace(/\-/gi, "");
	return input;
};
