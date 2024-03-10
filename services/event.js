const assert = require('assert');

class EventService {
    constructor() {
        const events = [
            {
                id: 1,
                date: Date.now(),
                location: "Tashkent",
                description: "lorem ip sum"
            }
        ];
        this.events = events;
    }

    readById(id) {
        const event = this.events.find((event) => {
            if (event.id == id) {
                return event;
            }
        })

        return event;
    }

    readAll() {
        return this.events;
    }

    create(event) {
        const eventKeys = Object.keys(event);

        try {
            assert.deepEqual(eventKeys, [ 'id', 'date', 'location', 'description' ]);
        }catch(err) {
            throw new Error("there is error in property naming");
        }

        this.events.push(event)

        return this.events;
    }

    update(eventToUpdate) {
        const index = this.events.findIndex((event, index) => {
            if (event.id == eventToUpdate.id) {
                return true;
            }
        })

        this.events[index] = eventToUpdate;
        return this.events[index];
    }

    deleteById(id) {
        this.events.filter(event => event.id !== id)

        return this.events;
    }
}

module.exports = EventService