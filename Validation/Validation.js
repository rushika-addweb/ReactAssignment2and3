import React from 'react';

const validation = ( props ) => {
    let checkvalidation = 'message is too large';

    if (props.inputLength <= 12) {
        checkvalidation = 'message is too short';
    }

    return (
        <div>
            <p>{checkvalidation}</p>
			<p> Validate message:{props.inputLength}</p>
        </div>
    );
};

export default validation;