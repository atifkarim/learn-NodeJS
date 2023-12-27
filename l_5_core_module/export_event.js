// This file will export an event to another file

const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('This will export an event to another file');

        setTimeout(() => {
            this.emit('period_ended', {
                place: 'Frankfurt',
                date: new Date(),
            });
        }, 2000);
    }
}

module.exports = School;
