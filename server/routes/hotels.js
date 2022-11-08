import { getHotels, getHotel, createHotel, deleteHotel, updateHotel, countByCity, countByType } from "../controllers/hotels.js"
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth.js";


const router = Router();


// BY Q
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

// delete
router.delete("/:id", adminAuth, deleteHotel);
// get
router.get("/:id", getHotel);
// getAll
router.get("/", getHotels);
//create
router.post("/", adminAuth, createHotel);
// update
router.patch("/:id", adminAuth, updateHotel);




export default router;