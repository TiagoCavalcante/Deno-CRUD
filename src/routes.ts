import { Router } from "https://deno.land/x/oak/mod.ts";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "./controller/user.ts";

const router = new Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser); // route e.g.: /user/13
router.post('/user', addUser);
router.put('/user/:id', updateUser); // route e.g.: /user/13
router.delete('/user/:id', deleteUser); // route e.g.: /user/13

export default router;