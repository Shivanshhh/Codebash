import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-perl';
import 'ace-builds/src-noconflict/mode-c_cpp';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-kuroir';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-terminal';

import './message-box.styles.css';

const MessageBox = ({
    message, isMine, theme, language,
}) => {
    const renderMessage = (message) => {
        if (message.message) {
            if (message.type === 'message') {
                return (
                    <div
                        className={isMine ? 'message-box right' : 'message-box'}
                    >
                        {`${message.user}- ${message.message}`}
                    </div>
                );
            }
            let mode = '';
            if (language === 'C' || language === 'C++') {
                mode = 'c_cpp';
            } else {
                mode = language;
            }
            return (
                <div
                    className={isMine ? 'code-box right' : 'code-box'}
                >
                    <AceEditor
                        value={message.message}
                        mode={mode.toLowerCase()}
                        theme={theme.toLowerCase()}
                        name="coding-space-message"
                        highlightActiveLine
                        showGutter
                        fontSize={18}
                        showPrintMargin={false}
                        editorProps={{ $blockScrolling: false }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                </div>
            );
        }
        return null;
    };
    return renderMessage(message);
};

export default MessageBox;
