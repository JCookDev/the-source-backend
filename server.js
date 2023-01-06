const express = require('express')
const cors = require('cors')
const app = express

app.use(cors())
app.use(express.json())

app.locals.title = 'The Source'
app.locals.music = [

]

app.set('port', 3001)
app.listen(app.get('port', () => {
	console.log(`${ app.locals.title } is now running on port ${app.get('port')}!`)
}))

app.get('/poems', (request, response) => {
	response.status(200).json(app.locals.music)
})

app.get('/poems/:id', (request, response) => {

})
