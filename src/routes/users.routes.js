import { Router } from "express";
import res from "express/lib/response";
import { getUsers, createNewUser } from "../controllers/users.controllers";

const router = Router();

router.get('/users', getUsers)

router.post('/users', createNewUser);

router.get('/users')

router.delete('/users')

router.put('/users')


export default router;