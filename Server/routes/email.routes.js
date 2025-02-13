const express = require("express")
const { createEmail, deleteEmail, getAllEmailById } = require("../controllers/email.controller");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();

router.post("/create", isAuthenticated, createEmail);
router.delete("/:id",isAuthenticated, deleteEmail)
router.get("/getallemail",isAuthenticated, getAllEmailById)
 
module.exports = router;