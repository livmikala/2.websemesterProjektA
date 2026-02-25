const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

//Sender login request

const loginRes = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
});

const loginData = await loginRes.json();

if (loginRes.status !== 200) {
    alert(loginData.message);
    return;
}

//Email simulering
const otp = prompt(`Indtast den OTP du fik(simuleret email): ${loginData.otp}`);

//Send OTP til server
const verifyRes = await fetch('http://localhost:3000/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, otp })
});

const verifyData = await verifyRes.json();
alert(verifyData.message);
});