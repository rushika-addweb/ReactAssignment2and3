import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
			<p>Reactjs Assignment from 1 to 10</p>
            <p>Username: {props.userName}</p>
            <p>Print Username</p>
        </div>
    );
};

export default userOutput;