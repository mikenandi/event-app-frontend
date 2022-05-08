// --getting the upload url first.
axios({
	method: "GET",
	headers: {
		Authorization: authToken,
	},
	url: "http://gudsurvey.herokuapp.com/api/v1/s3-url",
})
	.then((response) => {
		console.log(response.data);
		axios({
			method: "PUT",
			headers: {
				"Content-Type": "multipart/form-data",
			},
			url: response.data.url,
			data: photos[0].uri,
		}).then((response) => {
			console.log(response);
		});
	})
	.catch((error) => {
		if (error.response) {
			console.log(error.response.data);
		}
	});
