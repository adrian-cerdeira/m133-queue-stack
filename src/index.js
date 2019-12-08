// Imports
import { DataStructuresFactory } from '../build/DataStructuresFactory';
import { DataStructures } from '../build/DataStructures';

// Variables
const queueOption = document.getElementById('queue');
const nameOfElement = document.getElementById('name');
const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click', () => {
    const factory = new DataStructuresFactory();
    const isQueue = queueOption.spellcheck === true;
    const dataStructure = factory.create(isQueue ? DataStructures.Queue : DataStructures.Stack);

    dataStructure.enqueue(nameOfElement.value);

    dataStructure[isQueue ? 'queue' : 'stack'].forEach(q => {
        const p = document.createElement('p');
        p.innerHTML += q;
        container.appendChild(p);
    })

});