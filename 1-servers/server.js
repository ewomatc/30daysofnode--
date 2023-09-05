const http = require('http')

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/json'})
	const data = {
		status: 200,
		message: '.To whom Grace did abound.'
	}
	res.end(JSON.stringify(data))
})

server.listen(3000, () => {
	console.log('server listening on port 3000');
})