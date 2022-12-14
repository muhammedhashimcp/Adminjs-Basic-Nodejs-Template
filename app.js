import express from 'express'
const PORT = 4000;
import dotenv from 'dotenv'
dotenv.config();
// our config
const app = express();
import {adminRouter} from './routes/admin.router.js'  
//requiring data base config
import db from './config/dataBase.js'
db(); 
 
// Endpoint  for admin
app.use('/admin', adminRouter);
app.listen(PORT, () => {
	console.log(`AdminJS started on http://localhost:${PORT}/admin`);
});
