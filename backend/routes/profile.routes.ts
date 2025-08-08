import { Express } from "express";
const router = require('express').Router();
import { getUserProfile } from "../controllers/profileController";
import { authenticatore } from "../middlewares/auth.middleware";
import { addAddress } from "../controllers/addressController";


router.get('/profile', authenticatore, getUserProfile);
router.post('/address-update',authenticatore, addAddress);
export default router;