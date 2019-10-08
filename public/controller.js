var connect = "wss://test.mosquitto.org:8081/mqtt";
client = mqtt.connect(connect);
$(document).ready(function () {
$("#btn-connect").click(function (e) {
e.preventDefault();
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
var topic = 'joey/device/status';
var payload = 'Turned On: ' + time
client.publish(topic, payload);
$("#status").html("DEVICE IS ON");
})
$("#btn-disconnect").click(function (e) {
e.preventDefault();
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
var topic = 'joey/device/status';
var payload = 'Turned Off: ' + time
client.publish(topic, payload);
$("#status").html("DEVICE IS OFF");
})
})




























