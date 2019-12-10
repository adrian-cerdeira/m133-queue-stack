// Imports
import { DataStructuresFactory } from '../build/DataStructuresFactory';
import { DataStructures } from '../build/DataStructures';

// Variables
const queueOption = document.getElementById('queue');
const nameOfElement = document.getElementById('name');

const factory = new DataStructuresFactory();
let isQueue = queueOption.checked === true;
let Queue = factory.create(DataStructures.Queue);
let Stack = factory.create(DataStructures.Stack);

const btnAdd = document.getElementById('add');
const btnDelete = document.getElementById('delete');
const queueContainer = document.getElementById('queue-container');
const stackContainer = document.getElementById('stack-container');

// Element hinzufügen, je nach Datenstruktur
btnAdd.addEventListener('click', () => {
    isQueue = queueOption.checked === true;
    const queueOutputEmpty = isQueue && queueContainer.innerHTML === '';
    const stackOutputEmpty = !isQueue && stackContainer.innerHTML === '';

    // Objekt erstellen, falls noch nicht existent
    if (queueOutputEmpty) {
        Queue = factory.create(DataStructures.Queue)
    } else if (stackOutputEmpty) {
        Stack = factory.create(DataStructures.Stack)
    }

    const dataStructure = isQueue ? Queue : Stack;
    dataStructure.enqueue(nameOfElement.value);

    output();
});

// Element löschen, je nach Datenstruktur
btnDelete.addEventListener('click', () => {
    isQueue = queueOption.checked === true;
    const dataStructure = isQueue ? Queue : Stack;
    dataStructure.poll();

    output();
})

// Ausgabe/Erneuerung der erstellten/gelöschten Daten
function output() {
    // Ausgabe zurücksetzen
    isQueue
        ? queueContainer.innerHTML = ''
        : stackContainer.innerHTML = '';

    // Ausgabe erstellen
    const dataStructure = isQueue ? Queue.queue : Stack.stack;
    dataStructure.forEach(q => {
        const p = document.createElement('p');
        p.innerHTML += q;
        isQueue ? queueContainer.appendChild(p) : stackContainer.appendChild(p);
    });
}
