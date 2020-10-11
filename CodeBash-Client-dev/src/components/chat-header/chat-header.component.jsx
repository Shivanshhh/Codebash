import React from 'react';
import './chat-header.styles.css';

const ChatHeader = ({ room }) => <div className="chat-header">{room.toUpperCase()}</div>;

export default ChatHeader;
