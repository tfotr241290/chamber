const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9063ba665cmshcb4827e9a01543ep1eac1ejsn03bdeb1935f0',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/Monterrey', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));