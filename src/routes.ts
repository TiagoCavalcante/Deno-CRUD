import { Router } from "https://deno.land/x/oak/mod.ts";
import { addUser, deleteUser, getUser, getUsers, updateUser } from './controller/user.ts';

const router = new Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', addUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;