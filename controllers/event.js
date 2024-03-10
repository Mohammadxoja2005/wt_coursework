const EventService = require("../services/event");

const eventService = new EventService();

class EventController {
    createEvent(req,res) {
        const event  = req.body;

        eventService.create(event);

        res.send(event);
    }

    readEventById(req,res) {
        const {id} = req.params;

        const event = eventService.readById(id);

        res.send(event);
    }

    readAll(req,res) {
        const events = eventService.readAll();

        res.render("../views/events.ejs", {pageTitle: "tit"});
    }

    update(req,res) {
        const event = req.body;

        const updatedEvent = eventService.update(event);

        res.send(updatedEvent);
    }

    deleteById(req,res) {
        const {id} = req.params;

        eventService.deleteById(id);

        res.send("deleted successfully");
    }
}

module.exports = EventController;
