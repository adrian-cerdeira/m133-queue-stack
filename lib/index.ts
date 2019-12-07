// Imports
import { Queue } from './Queue';

// Variables
const queueOption = document.getElementById('queue');
const nameOfElement = document.getElementById('name');
const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click', () => {
    const isQueue = queueOption.spellcheck === true;
    if (isQueue) {
        return createQueue();
    }
});

function createQueue() {
    const newQueue = new Queue();
    const p = document.createElement('p');
    newQueue.enqueue(nameOfElement);
    newQueue.queue.forEach(q => {
        p.innerHTML += q;
    })
    return container.appendChild(p);
}
