import React from 'react';
import './members-list.styles.css';

const MembersList = ({ members }) => (
    <div className="members-list">
        {
            members.map((member, i) => (
                <div key={i}>{member.username}</div>
            ))
        }
    </div>
);

export default MembersList;
