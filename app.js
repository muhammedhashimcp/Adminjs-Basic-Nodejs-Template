const express = require('express');
const PORT = 3000;

// our config
const app = express();
const adminRouter = require('./routes/admin.router');
//requiring data base config
const db = require('./config/dataBase');
db();

// default admin js config
// const start = async () => {
// 	const app = express();

// 	const admin = new AdminJS({});

// 	const adminRouter = AdminJSExpress.buildRouter(admin);
// 	app.use(admin.options.rootPath, adminRouter);

// 	app.listen(PORT, () => {
// 		console.log(
// 			`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
// 		);
// 	});
// };

// start();


app.use('/admin', adminRouter);
app.listen(PORT, () => {
	console.log(`AdminJS started on http://localhost:${PORT}/admin`);
});
