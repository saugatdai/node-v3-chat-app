const users = [];

const addUser = ({ id, username, room }) => {
    //clean data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        };
    }

    //Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    });

    //validate username
    if (existingUser) {
        return {
            error: 'Username is in use'
        };
    }

    //Store User
    const user = { id, username, room };
    users.push(user);
    return { user };
};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (roomName) => users.filter(user => user.room === roomName.toLowerCase());

const user1 = {
    id: 1,
    username: 'Shaggy',
    room: 'Kathmandu'
};

const user2 = {
    id: 2,
    username: 'Saugat',
    room: 'Biratnagar'
};

const user3 = {
    id: 3,
    username: 'Holus',
    room: 'Kathmandu'
};

const user4 = {
    id: 4,
    username: 'Rafta',
    room: 'Kathmandu'
};

const user5 = {
    id: 5,
    username: 'Zayed',
    room: 'Biratnagar'
};

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
};