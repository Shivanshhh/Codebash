import React from 'react';

import MembersHeader from '../members-header/members-header.component';
import MembersList from '../members-list/members-list.component';

import './members-section.styles.css';

const MembersSection = ({ members }) => (
    <div className="members-section">
        <MembersHeader />
        <MembersList members={members} />
    </div>
);

export default MembersSection;
