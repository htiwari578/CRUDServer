import express from "express";


const router = express.Router();

router.post("/user", createUsers);
router.get("/user", getAllUsers);
router.get("/user:id", getAllUserById);
router.put("/user:id", updateUser);
router.delete("/user:id", deleteUser);


export default router;

