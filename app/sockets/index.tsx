import { Server, Socket } from 'socket.io';

const socketHandler = (socket: Socket, io: Server): void => {
  socket.on('sendMessage', (message: string) => {
    socket.broadcast.emit('sendMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected:', socket.id);
  });
};

export default socketHandler;
