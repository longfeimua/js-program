var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function (error) {
  console.log('Connect Error: ' + error.toString());
});

// 连接服务端
client.on('connect', function (connection) {

  console.log('WebSocket Client Connected');

  connection.on('error', function (error) {
    console.log("Connection Error: " + error.toString());
  });
  connection.on('close', function () {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log("Received: '" + message.utf8Data + "'");
    }
  });

  // 发送数据
  function sendNumber() {
    if (connection.connected) {
      var number = Math.round(Math.random() * 0xFFFFFF)+'你好！';
      connection.sendUTF(number.toString());
      setTimeout(sendNumber, 1000);
    }
  }
  sendNumber()
});

client.connect('ws://localhost:8080/', 'echo-protocol');