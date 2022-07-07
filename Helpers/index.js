// a function that will be generating id.
export const generateId = () => {
	//Generating random string with number generated.
	let number = 16;

	const random_string = crypto
		.randomBytes(number)
		.toString("base64")
		.replace(/[/\+=]/g, "");

	// combinging every thing
	let id = inputs.identity + "_" + random_string;

	// return response which will be string.
	return id;
};

export const transformToStringMonth = (numberOfMonth) => {
	let index = Number(numberOfMonth) - 1;

	let monthNumber = [
		"jan",
		"feb",
		"mar",
		"apr",
		"may",
		"jun",
		"jly",
		"aug",
		"spt",
		"oct",
		"nov",
		"dec",
	];

	let output = monthNumber[index];
	return output;
};
