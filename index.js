const CLIENT_ID = process.env.CLIENT_ID;
const settings = {
	method: 'GET',
};

fetch(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`, settings)
	.then(res => res.json())
	.then((json) => {
		console.log(JSON.stringify(json));
	});
