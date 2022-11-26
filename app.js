const express = require('express');
const PORT = 3000;
require('dotenv').config();
// our config
const app = express();
const adminRouter = require('./routes/admin.router');
//requiring data base config
const db = require('./config/dataBase');
db();

// Endpoint  for admin
app.use('/admin', adminRouter);
app.listen(PORT, () => {
	console.log(`AdminJS started on http://localhost:${PORT}/admin`);
});
