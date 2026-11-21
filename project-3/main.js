import { client, publish, subscribe } from "./client.js"

/* -- Subscribe --
    subscribe(TOPIC) */ 

client.on('connect', function () {
    // ใส่ชื่อ Topic
    subscribe([
        ''
    ])

})


client.on('message', function (topic, payload) { 
    console.log(topic, payload.toString())
})

/* -- Publish --
    publish(TOPIC, payload) */

document.getElementById('led-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('led-input');
    const text = input.value;

    if (!text) return;

    publish('public', text);

    input.value = "";
})