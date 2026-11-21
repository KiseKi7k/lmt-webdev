import { client, publish, subscribe } from "./client.js"
const me = "w01";
const board = "b01";

/* -- Subscribe --
    subscribe(TOPIC) */ 

client.on('connect', function () {
    // ใส่ชื่อ Topic
    subscribe([
        `public/lmt6/board/${board}/light`
    ])

    console.log("Connected");
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

    publish(`public/lmt6/board/${board}/text/${me}`, text);

    input.value = "";
})