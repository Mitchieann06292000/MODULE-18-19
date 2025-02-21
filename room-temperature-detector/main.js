const http = require('http');
const fs = require('fs');


function generateRandomTemperature() {
    return Math.floor(Math.random() * (35 - 15 + 1) + 15);
}


const server = http.createServer((req, res) => {
    
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error loading the HTML file');
        } else {
 
            const temperature = generateRandomTemperature();

            
            const modifiedData = data.replace('-', temperature);

        
            res.setHeader('Content-Type', 'text/html');

       
            res.end(modifiedData);
        }
    });
});


server.listen(3000, () => {
    console.log('Server running on port 3000');
});
