const fs = require('fs')
const { emailFrom, password, subject, msg} = require('./config.json')
let i = 0

/*const data = fs.readFileSync('accounts.txt', 'utf8')

const emails = data.split('\n').map(el => el.split(':')[0])
console.log(emails)

fs.writeFileSync('emails.txt', emails.join('\n'))*/

const emails = fs.readFileSync('emails.txt', 'utf8').split('\n')

setInterval( () => {

	if(i > emails.length) throw err

	const send = require('gmail-send')({
	user: emailFrom,
	pass: password,
	to: emails[i],
	subject: subject
	})

	send({
		text: msg
	}, (error, result, fullResult) => {
		if(error) console.error(error)
		console.log(result)
	})

	console.log(emails[i])

	i += 1

}, 5000)