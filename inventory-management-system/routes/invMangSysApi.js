const express = require("express");
const router = express.Router();
const imsController = require("../controller/invMangSysController");
const middleware = require("../middleware/authMiddleWare")


router.post('/create-inventory', middleware, imsController.createInventory)
router.get('/read-inventory', middleware, imsController.readInventory)
router.put('/update-inventory:id', middleware, imsController.updateInventory)
router.delete('/delete-inventory:id', middleware, imsController.deleteInventory)
router.get('/search', middleware, imsController.inventoryItemSearch)

module.exports = router;
