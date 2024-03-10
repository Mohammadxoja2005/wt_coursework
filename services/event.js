const assert = require('assert');
const { v4: uuidv4 } = require('uuid');

class EventService {
    constructor() {
        const events = [

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

        event.id = uuidv4();

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
        const result = this.events.filter(event => event.id !== id)

        this.events = result;

        return this.events;
    }
}

module.exports = EventService