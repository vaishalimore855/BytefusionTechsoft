const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener for the 'sayHello' event
eventEmitter.on('sayHello', (name) => {
    console.log(`Hello, ${name}!`);
});

// Register another event listener for the 'sayGoodbye' event
eventEmitter.on('sayGoodbye', () => {
    console.log('Goodbye!');
});

// Emit the 'sayHello' event
eventEmitter.emit('sayHello', 'Vaishali');

// Emit the 'sayGoodbye' event
eventEmitter.emit('sayGoodbye');
