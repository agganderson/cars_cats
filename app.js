var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	if(request.url === '/'){
		fs.readFile('./views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars'){
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars/new'){
		fs.readFile('./views/form.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === '/images/car1.jpg'){
		fs.readFile('./images/car1.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/car2.jpg'){
		fs.readFile('./images/car2.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cats'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/cat3.gif'){
		fs.readFile('./images/cat3.gif', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'image/gif'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/cat2.jpg'){
		fs.readFile('./images/cat2.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else {
		response.end('File not found');
	}
});
server.listen(6789);