import { client, publish, subscribe } from "./client.js"
const me = "w"; // เเก้เป็นเลขูคู่่ตัวเอง ex. w01
const board = "b"; // เเก้เป็นเลขูคู่่ตัวเอง ex. b01

function updateLDR(value) {
    const ldrText = document.getElementById('id?'); // เเก้ไข
    ldrText.textContent = value; 
}

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
    // Code here
    const parts = topic.split("/");
    const text = payload.toString();

    if (parts == "light") {
        updateLDR(text);
    }

    console.log(topic, payload.toString())
})

/* -- Publish --
    publish(TOPIC, payload) */

document.getElementById('id?') // เเก้ไข
    .addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('led-input');
    const text = input.value;

    if (!text) return;

    publish(`public/lmt6/board/${board}/text/${me}`, text);

    input.value = "";
})