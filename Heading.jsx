import React from 'react';

function Heading() {

    const date = new Date();
    const time = date.getHours();

    let ans;
    const custom = {
        color: ""

    }

    if (time < 12) {
        ans = "Good Morning";
        custom.color = "darkpink";
    }
    else if (time < 18) {
        ans = "Good Afternoon";
        custom.color = "blue";
    }
    else {
        ans = " Good Night";
        custom.color = "pink";
    }
    return <h1 className='heading' style={custom}>
        {ans}
    </h1>
}

export default Heading;