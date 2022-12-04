import { Router } from "express";
import accountsController from '../controllers/accounts';
import { validateAccount, validateLogin } from "./validateSchemasMiddlewares";




const router = Router();

router.get('/accounts', accountsController.getAccounts);
router.get('/accounts/:id', accountsController.getAccount);

router.patch('/accounts/:id', validateAccount, accountsController.setAccount);

router.post('/accounts', validateAccount, accountsController.addAccount);

router.post('/accounts/login', validateLogin, accountsController.loginAccount)

router.post('/accounts/logout', accountsController.logaoutAccount);

export default router;