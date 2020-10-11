import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JoinPage = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <h1>JOINPAGE</h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    required
                />
                <Link
                    onClick={(e) => ((!name || !room) ? e.preventDefault() : null)}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button type="submit">JOIN ROOM</button>
                </Link>
            </form>
        </div>
    );
};

export default JoinPage;
