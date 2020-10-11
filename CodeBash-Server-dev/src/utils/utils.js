const users = [];

const addUserToRoom = ({ id, username, room }) => {
    // Cleaning data
    const cleanedUsername = username.trim().toLowerCase();
    const cleanedRoom = room.trim().toLowerCase();

    // validate the data
    if (!cleanedUsername || !cleanedRoom) {
        return {
            error: 'A username and a room is required',
        };
    }

    // Check for existing user
    const existingUser = users.find(
        (user) => user.room === cleanedRoom && user.username === cleanedUsername,
    );
    if (existingUser) {
        return {
            error: 'A user with the same name already exists in the room',
        };
    }

    const user = { id, username: cleanedUsername, room: cleanedRoom };

    users.push(user);

    return { user };
};

const getUserById = (id) => {
    const user = users.find((indUser) => indUser.id === id);
    return user;
};

const removeUserFromRoom = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
    return null;
};

const getUsersInRoom = (room) => {
    const usersInRoom = users.filter((user) => user.room === room);
    return usersInRoom;
};

module.exports = {
    addUserToRoom,
    getUserById,
    removeUserFromRoom,
    getUsersInRoom,
};
