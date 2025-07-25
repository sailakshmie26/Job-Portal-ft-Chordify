import { io } from "socket.io-client";

// Point to backend server
const socket = io("http://localhost:5000"); // or live URL later

export default socket;
