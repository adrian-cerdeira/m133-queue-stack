// Imports
import { DataStructuresFactory } from '../build/DataStructuresFactory';
import { DataStructures } from '../build/DataStructures';

// Variables
const queueOption = document.getElementById('queue');
const nameOfElement = document.getElementById('name');

const factory = new DataStructuresFactory();
let isQueue = queueOption.checked === true;
let dataStructure = factory.create(isQueue ? DataStructures.Queue : DataStructures.Stack);

const btnAdd = document.getElementById('add');
const btnDelete = document.getElementById('delete');
const queueContainer = document.getElementById('queue-container');
const stackContainer = document.getElementById('stack-container');

// Element hinzufügen, je nach Datenstruktur
btnAdd.addEventListener('click', () => {
    isQueue = queueOption.checked === true;
    const queueOutputEmpty = isQueue && queueContainer.innerHTML === '';
    const stackOutputEmpty = !isQueue && stackContainer.innerHTML === '';

    if (queueOutputEmpty || stackOutputEmpty) {
        dataStructure = factory.create(isQueue ? DataStructures.Queue : DataStructures.Stack);
    }

    dataStructure.enqueue(nameOfElement.value);

    output();
});

// Element löschen, je nach Datenstruktur
btnDelete.addEventListener('click', () => {
    dataStructure.poll();;
    output();
})

// Ausgabe/Erneuerung der erstellten/gelöschten Daten
function output() {
    // Ausgabe zurücksetzen
    queueContainer.innerHTML = '';
    stackContainer.innerHTML = '';

    // Ausgabe erstellen
    dataStructure[isQueue ? 'queue' : 'stack'].forEach(q => {
        const p = document.createElement('p');
        p.innerHTML += q;
        isQueue ? queueContainer.appendChild(p) : stackContainer.appendChild(p);
    });
}
