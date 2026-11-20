// เปลี่ยนเป็น URL ของเราเอง
const MQTT_URL = ""

// ตรงนี้ไม่ต้องเปลี่ยน
export const client = mqtt.connect(MQTT_URL, { protocolVersion: 5 })

/**
 * Subscribe to MQTT topics.
 * @param {string | string[]} topics - Topic or list of topics
 * @returns {void}
 */
export function subscribe(topics) {
    client.subscribe(topics)
}

/**
 * Publish a message to an MQTT topic.
 * @param {string} topic - MQTT topic
 * @param {string | Buffer} message - Message payload
 * @returns {void}
 */
export function publish(topic, message) {
    client.publish(topic, message)
}