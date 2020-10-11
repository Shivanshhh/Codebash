import React from 'react';

import ChatHeader from '../chat-header/chat-header.component';
import ChatMessages from '../chat-messages/chat-messages.component';
import ChatBottom from '../chat-bottom/chat-bottom.component';

import './chat-section.styles.css';

const ChatSection = ({
    room,
    messages,
    name,
    onInputChange,
    sendMessage,
    sendCode,
    code,
    input,
    addEmojiToText,
    toggleEmojiPopup,
    emojiPopup,
    toggleCePopup,
    cePopup,
    onChangeCode,
    theme,
    setTheme,
    language,
    setLanguage,
}) => (
    <div className="chat-section">
        <ChatHeader room={room} />
        <ChatMessages
            messages={messages}
            name={name}
            theme={theme}
            language={language}
        />
        <ChatBottom
            onInputChange={onInputChange}
            sendMessage={sendMessage}
            sendCode={sendCode}
            input={input}
            addEmojiToText={addEmojiToText}
            toggleEmojiPopup={toggleEmojiPopup}
            emojiPopup={emojiPopup}
            toggleCePopup={toggleCePopup}
            cePopup={cePopup}
            code={code}
            onChangeCode={onChangeCode}
            theme={theme}
            setTheme={setTheme}
            language={language}
            setLanguage={setLanguage}
        />
    </div>
);

export default ChatSection;
