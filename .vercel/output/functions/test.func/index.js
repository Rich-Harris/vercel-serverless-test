export default async (req, res) => {
	res.writeHead(200, {
		'content-type': 'application/json'
	});

	res.end(JSON.stringify(req.headers));
};
