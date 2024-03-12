import express from "express";
import { addUser, getUser } from "../controllers/userController";
import validateRegistrationData from "../middlewares/userRegistrationMiddleware";

const router = express.Router();
router.post('/addUser', validateRegistrationData, addUser);
router.get('/user/:id', getUser);


export default router;