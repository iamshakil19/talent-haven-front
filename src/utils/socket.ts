// SocketClient.js
import React, { useEffect } from 'react';
import {io} from 'socket.io-client';

const SocketClient = () => {
  useEffect(() => {
    const socket = io('http://localhost:5000');
    
    socket.on('connect', () => {
      console.log('Connected to Socket.io server');
    });
    
    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.io server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
};

export default SocketClient;
