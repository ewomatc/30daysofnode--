const express = require('express')
const multer = require('multer')
const app = express()

// dest specifies where to save the files to, in this case, a folder called uploads
const upload = multer({
	dest: 'uploads/'
})


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.get('/success', (req, res) => {
	res.render('success')
})
app.post('/', upload.single('file'), (req, res) => {
	res.redirect('/success')
})

app.listen(3000, () => {
	console.log('server started on port 3000');
})