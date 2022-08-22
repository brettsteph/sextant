import { useState } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"

const PacketLatency = (props) => {
  const { url } = props;
  const [latency, setLatency] = useState('');
  const client = new W3CWebSocket(url);

  const connectToPylon = () => {
    client.onopen = function () {
      console.log('WebSocket Client Connected');
    };

    client.onclose = function () {
      console.log('Client Closed');
    };

    client.onmessage = function (message) {
      const serverTime = JSON.parse(message.data);
      console.log("Received: '" + serverTime + "'");
      let now = Date.now();
      let time = now - serverTime
      let date = new Date(time * 1000)
      console.log(date.getSeconds())
      setLatency(date.getSeconds())
    };
  }
  connectToPylon();

  return (
    <div className="id-address">
      {latency} seconds
    </div>
  )
}

export default PacketLatency