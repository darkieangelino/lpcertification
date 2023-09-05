const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Use the JSON Server router
server.use(router);

// Custom endpoint for handling login requests
server.post('/login', (req, res) => {
  // Simulated user authentication check
  const { email, password } = req.body;
  if (email === 'user@example.com' && password === 'password') {
    // User is authenticated, send a success response
    res.json({ success: true, message: 'Login successful' });
  } else {
    // Authentication failed, send an error response
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
