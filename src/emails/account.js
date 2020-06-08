const sgMail = require('@sendgrid/mail')

//const key = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'srinet.ankur@gmail.com',
        subject: 'Welcome to the Task App',
        text: `Welcome to the app, ${name}. Let me know how you like the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'srinet.ankur@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. Hope to see you back soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
