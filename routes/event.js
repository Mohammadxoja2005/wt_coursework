const express = require("express");
const router = express.Router();

const EventController = require("../controllers/event");
const eventController = new EventController();

router.post("/create", eventController.createEvent);
router.get("/:id", eventController.readEventById);
router.get("/", eventController.readAll);
router.delete("/:id", eventController.deleteById);
router.put("/update", eventController.update);

module.exports = router
