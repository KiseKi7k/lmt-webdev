// เปลี่ยนเป็น URL ของเราเอง
const MQTT_URL = "wss://api.sondahub.com/mqtt"

const client = mqtt.connect(MQTT_URL, { protocolVersion: 5 })

// Subscribe
// client.subscribe(TOPIC)

client.on('connect', function () {
    // ชื่อ Topic
    client.subscribe([
        'fleet/+/telemetry', 
        'fleet/alerts'
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

// Publish
// client.publish(TOPIC, payload)