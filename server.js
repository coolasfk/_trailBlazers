
const express = require('express');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer')


const app = express();
const port = 5500


app.set("port", port)

app.use(express.static("public"));
app.use(express.json());

//Routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/main.html')
  })

app.post("/send_email", function(req, res){
console.log(req.body);

    var yourName = req.body.yourName
    var yourEmail = req.body.yourEmail
    var textField = req.body.textField

    const transporter = nodemailer.createTransport({
        service: "gmail ",
        auth: {
            user: 'fkmylife.creative@gmail.com',
            pass: 'optkgnsiwfzlzcrm'
        }
    })


    let mailPOST = {
        name: yourName,
        from: 'fkmylife.creative@gmail.com',
        to: 'fkmylife.creative@gmail.com', yourEmail,
        subject: `Thank you for getting in touch with .trailBlazers ${yourName}!`,
        text: `Hey ${yourName}, \n thank you for contacting .trailBlazers! \n\nThis is a copy of the message you sent to us, and to ${yourEmail}: \n\n "${textField}" \n\n You can also reach us during our working hours under the number: +31682372271`,   
    };


    transporter.sendMail(mailPOST, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent: " + info.response)
        }
        response.redirect("/")
    })
})

//Initialize Web Server
app.listen(port, function(){
    console.log("starting server on port " + port)
})
console.clear()
