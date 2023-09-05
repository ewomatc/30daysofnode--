const crypto = require('crypto')
const algorithm = 'aes-256-ctr'
const salt = 'my_secret_key'

function encrypt(text) {
	const cipher = crypto.createCipher(algorithm, salt)
	let encrypted = cipher.update(text,'utf8', 'hex')
	encrypted += cipher.final('hex')
	return encrypted
}

console.log(encrypt('Ewoma'))