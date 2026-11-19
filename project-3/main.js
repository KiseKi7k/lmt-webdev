import { client, publish, subscribe } from "./client.js"

function handleLDR(value) {
    const element = document.getElementById('ldr-value');
    element.textContent = value.toString();
} 

function handleDHT(value) {
    const element = document.getElementById('dht-value');
    element.textContent = value.toString();
}

/* -- Subscribe --
    subscribe(TOPIC) */ 

client.on('connect', function () {
    // ชื่อ Topic
    subscribe([
        'ldr',
        'dht'
    ])
})

client.on('message', function (topic, payload) { 
    if (topic == 'LDR') {
        handleLDR(payload)
    } else if ( topic == 'DHT') {
        handleDHT(payload)
    }

    console.log(topic, payload.toString())
})

/* -- Publish --
    publish(TOPIC, payload) */

document.getElementById('led-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('led-input');
    const text = input.value;

    if (!text) return;

    publish('led', text);

    input.value = "";
})