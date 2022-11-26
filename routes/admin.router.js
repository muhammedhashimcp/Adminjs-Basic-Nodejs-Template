const AdminJs = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const adminConfig = require('../views/admin.options');
const adminRouter = AdminJSExpress.buildRouter(adminConfig);
module.exports = adminRouter;
