import {
    addUserToRoom,
    getUserById,
    removeUserFromRoom,
    getUsersInRoom,
} from '../utils/utils';

function socketHandler(io) {
    io.on('connection', (socket) => {
        console.log('We have a new socket connection');

        socket.on('joinRoom', ({ username, room }, callback) => {
            const { error, user } = addUserToRoom({ id: socket.id, username, room });

            if (error) {
                callback(error);
                return;
            }

            socket.join(user.room);

            socket.emit('message', {
                message: `Welcome to the room ${user.username}`,
                user: 'Admin',
                type: 'message',
            });

            socket.broadcast.to(user.room).emit('message', {
                message: `${user.username} has joined the room`,
                user: 'Admin',
                type: 'message',
            });

            io.to(user.room).emit('roomData', {
                roomUsers: getUsersInRoom(user.room),
            });

            callback();
        });

        socket.on('sendMessage', (message) => {
            const user = getUserById(socket.id);

            io.to(user.room).emit('message', message);
        });

        socket.on('disconnect', () => {
            const user = removeUserFromRoom(socket.id);

            if (user) {
                io.to(user.room).emit('message', {
                    message: `${user.username} has left the room`,
                    user: 'Admin',
                    type: 'message',
                });

                io.to(user.room).emit('roomData', {
                    roomUsers: getUsersInRoom(user.room),
                });
            }
        });
    });
}

export default socketHandler;
