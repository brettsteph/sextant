import { useState } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"

const PacketLatency = (props) => {
  const { url } = props;
  const [latency, setLatency] = useState(null);
  const client = new W3CWebSocket(url);

  const connectToPylon = () => {
    client.onopen = function () {
      console.log('WebSocket Client Connected');
    };

    client.onclose = function () {
      console.log('Client Closed');
    };

    client.onmessage = function (message) {
      const serverTime = message.data;
      let time = new Date().getTime()
      console.log(time - serverTime)
      setLatency(time - serverTime)
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