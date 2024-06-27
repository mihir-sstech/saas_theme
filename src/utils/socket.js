import io from "socket.io-client";

const socket_url = process.env.REACT_APP_SOCKET_URL;

const socket = io(socket_url, {
    transports: ["websocket"],
    autoConnect: true,
    secure: true,
    reconnection: true,
    reconnectionDelay: 1000,
})

export default socket;