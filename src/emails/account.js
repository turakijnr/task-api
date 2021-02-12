const sgMail = require('@sendgrid/mail')

sgMail.setApiKey (process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'btnuuman@gmail.com',
        subject: 'Thanks for joining in!',
        text:`Welcome on board! ${name}.`
    })
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'btnuuman@gmail.com',
        subject: 'sorry to see you go!',
        text:`Goodbye! ${name}. We hope to see you soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}