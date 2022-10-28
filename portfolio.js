const http = require('http') //Import http module

const server = http.createServer((req, res) =>{
    if(req.url === "/" || req.url === "/home" ){
        res.writeHead(200, {'Content-Type' : 'text/html'});
         res.write(`
            <html>
                <body>
                    <h1>Bio Data</h1>
                    <p><strong>Name</strong> : Olatunji Abayomi </p>
                    <p><strong>Nationality</strong>: Nigerian</p>
                    <p><strong>Age</strong>: 19</p>

                </body>
            </html>
        `)
        res.end();
    }
    else if (req.url === "/about") {
        res.writeHead(200, {'Content-Type' : "text/html"});
        res.write(`
            <html>
            <body>
            <h1>About Me</h1>
            <p>My name is Abayomi. I am an aspiring fullstack developer kickstarting my developer journey with Zuri </p>
            <p>I am a very inquisitive person who love to explore things a lot and i learn by doing</p>
            </body>
            </html>
           
        `)
        res.end()
    }

    
    else if (req.url === "/contact-me") {
        res.writeHead(200, {'Content-Type' : "text/html"});
        res.write(`

        <html>
        <body>
        <h1>Contact Me</h1>
        <ul>
            <li><a href="https://twitter.com/abayomi_olat">Twitter</a></li>
        </ul>
        </body>
        </html>
            
            
        `)
        res.end()
    }
    
    else{
        res.writeHead(404, {"Content-Type": "text/html"})
        res.write(`
        <html>
        <body>
            <h1> Oops!</h1>
            <p> We can't seem to find the page you are looking for</p>
            <a href="/">Back home</a>
        </body>
        </html>
        `)
        
        
        res.end();
    }
   
})

server.listen(3000, "localHost", ()=>{
    console.log('Node.js webserver at port 3000 is running');
});


