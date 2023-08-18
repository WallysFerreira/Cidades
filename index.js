const settings = {
	method: 'GET',
};

fetch(`https://api.unsplash.com/search/photos?per_page=1&query=recife&client_id=Gnyk3zT5LxqqYaOq3XbDbQVgz4W6uZWzRm4wQQF9gjI`, settings)
	.then(res => res.json())
	.then((json) => {
		console.log(json);
	});
