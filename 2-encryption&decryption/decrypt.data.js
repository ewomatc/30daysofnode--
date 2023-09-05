const crypto = require('crypto')

const algorithm = 'aes-256-cbc'
const salt = 'my_secret_key'

function decrypt(text) {
	const decipher = crypto.createDecipher(algorithm, salt)
	let decrypted = decipher.update(text, 'hex', 'utf8')
	decrypted += decipher.final('utf8')
	return decrypted
}

console.log(decrypt('32cdd73749'));