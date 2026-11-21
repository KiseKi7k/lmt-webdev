import { client, publish, subscribe } from "./client.js"

/* -- Subscribe --
    subscribe(TOPIC) */ 

client.on('connect', function () {
    // ใส่ชื่อ Topic
    subscribe([
        ''
    ])

    console.log("Connected");
})


client.on('message', function (topic, payload) { 
    console.log(topic, payload.toString())
})

/* -- Publish --
    publish(TOPIC, payload) */