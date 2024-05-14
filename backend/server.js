const express = require('express');
const app = express();
const authroutes = require('./src/routers/authRoutes');
const connectToDb = require('./src/database/connectToDb');
const cors = require('cors');
const dotenv = require('dotenv');
app.use(express.json({ extended: false })); //for req.body

app.use(cors());
dotenv.config();

const PORT = process.env.port || 3000;

connectToDb();
app.use('/', authroutes);
app.listen(PORT, () => {
  console.log(`Listining from port ${PORT}.....`);
});
