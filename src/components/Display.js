//import React from 'react';

export default function Display(props) {

    return(
        <div id="display">
            <p>kit: 909</p>
            <p>sample: {props.soundLabel}</p>
            {/* <p>{props.volume}</p> */}
        </div>
    )
}