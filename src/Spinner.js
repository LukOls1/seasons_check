import React from 'react';

const Spinner = props => (
    <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.message}</div>
    </div>
    );
Spinner.defaultProps = {
    message: 'Loading...',
};

export default Spinner;
