import React, { useRef } from 'react';
//import soundBank from '../soundData/soundBank';

export default function DrumPad(props) {

    // create a reference for html audio element
    const audioEl = useRef(null);

    const play_UpdateDisplay = (e) => {
        const sound = audioEl.current;
        sound.currentTime = 0;
        // play sound and prevent Uncaught(in promise) DOMException when running
        // FCC test suite in Chrome:
        let playPromise = sound.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => { })
                .catch(error => {
                    console.log(error);
                })
        }
        props.updateDisplay(e.target.id);
    }

    return (
        <button id={props.id} className="drum-pad" onClick={play_UpdateDisplay} >
            {props.padLabel}
            <audio id={props.padLabel} className="clip" ref={audioEl} src={props.url}></audio>
        </button>
    )
}