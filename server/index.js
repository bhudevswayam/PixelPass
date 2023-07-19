import express from 'express';
import router from './routes/routes.js'
import cors from 'cors'
import conn from './db/conn.js'

const app = express();
const port = 8080;

// Set up a route to handle requests
app.use(cors())
app.use('/',router)
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

conn();