import { Router } from "express";
import accountsController from '../controllers/accounts';
import { validateAccount, validateLogin, validateUpdateAccount, validateAuth } from "./validateSchemasMiddlewares";




const router = Router();

router.get('/accounts', validateAuth, accountsController.getAccounts);
router.get('/accounts/:id', validateAuth, accountsController.getAccount);

router.patch('/accounts/:id',validateAuth, validateUpdateAccount, accountsController.setAccount);

router.post('/accounts', validateAccount, accountsController.addAccount);

router.post('/accounts/login', validateLogin, accountsController.loginAccount)

router.post('/accounts/logout', validateAuth, accountsController.logaoutAccount);

export default router;