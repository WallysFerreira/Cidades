//const CLIENT_ID = process.env.CLIENT_ID;
const settings = {
	method: 'GET',
};

fetch(`https://api.unsplash.com/photos/random?client_id=Gnyk3zT5LxqqYaOq3XbDbQVgz4W6uZWzRm4wQQF9gjI`, settings)
	.then(res => res.json())
	.then((json) => {
		console.log(JSON.stringify(json));
	});
