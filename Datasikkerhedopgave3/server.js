const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

let users = JSON.parse(fs.readFileSync('users.json'));
let tempOTPs = {};

//Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(400).json({ message: 'Forkert brugernavn eller password' });

    //Laver engangskode
    const otp = Math.floor(100000 + Math.random() * 900000);
    tempOTPs[username] = { otp, used: false };

    //e-mail-simulering
    res.json({ message: 'OTP genereret, se konsol eller http-respons', otp });
});

//Verify OTP
app.post('/verify-otp', (req, res) => {
    const { username, otp } = req.body;
    const record = tempOTPs[username];

    if (!record) return res.status(400).json({ message: 'Ingen OTP funder for bruger' });
    if (record.used) return res.status(400).json({ message: 'Denne OTP er allerede brugt' });
    if (record.otp != otp) return res.status(400).json({ message: 'Forkert OTP' });

    record.used = true;
    res.json({ message: 'Login lykkedes'});
});

app.listen(3000, () => console.log('Server kører på http://localhost:3000'));