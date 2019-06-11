import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Damn, sooo hot',
        iconName: 'sun',
    },
    winter: {
        text: 'Sooo cold',
        iconName: 'snowflake',
    },
};

const getSeason = (lat, mounth) => {
    if (mounth > 2 && mounth < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div>
            <i className={`massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
