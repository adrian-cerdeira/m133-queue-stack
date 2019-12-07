// Imports
import { DataStructuresFactory } from './DataStructuresFactory';
import { DataStructures } from './DataStructures';

// Variables
const queueOption = document.getElementById('queue');
const nameOfElement = document.getElementById('name');
const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click', () => {
    const factory = new DataStructuresFactory();
    const p = document.createElement('p');
    const isQueue = queueOption.spellcheck === true;
    const dataStructure = factory.create(isQueue ? DataStructures.Queue : DataStructures.Stack);

    dataStructure.enqueue(nameOfElement);

    dataStructure[isQueue ? 'queue' : 'stack'].forEach(q => {
        p.innerHTML += q;
    })

    container.appendChild(p);
});