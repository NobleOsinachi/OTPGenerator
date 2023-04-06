const http = require('http');
let otpGenerator = require('./otpGenerator');
otpGenerator = otpGenerator.otpGenerator;

const server = http.createServer((req, res) => {
    if (req.url === '/api/otp') {
        // Set the response headers
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');


        // Generate a new OTP
        const otp = otpGenerator.generateOTP();

        // Send the OTP in the response body
        res.end(otp);
    } else {
        // Send a 404 error for all other requests
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
