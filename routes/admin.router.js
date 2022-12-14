import AdminJs from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import {adminConfig} from '../views/admin.options.js'
 const adminRouter = AdminJSExpress.buildRouter(adminConfig);
export {adminRouter}
// module.exports = adminRouter;




// export default adminRouter;
