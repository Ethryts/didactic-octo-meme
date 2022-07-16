const express = require('express')
const app = express()
const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;



app.get('/', (req, res) =>{
	
//	res.send(__dirname+ '/src/main.ts')
	res.sendFile(__dirname + '/src/main.ts')
})
app.listen(port, ()=>{

	console.log(`port openend on ${port}`)
})


/**
const server = http.createServer((req, res) => {

	fs.readFile(__dirname+req.url, function(err,data){
		if(err){
			res.writeHead(404);
			res.end(JSON.stringify(err));
			return;
		}
	})
	res.writeHead(200);
	res.end();
});

server.listen(port, hostname, () => {
	console.log(`server running at https://${hostname}:${port}/`);
	console.log("this is from server");
});


*/
