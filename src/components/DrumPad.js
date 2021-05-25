import React, { useRef } from 'react';
//import soundBank from '../soundData/soundBank';

export default function DrumPad(props) {

    // create a reference for html audio element
    const audioEl = useRef(null);
    const buttonEl = useRef(null);

    const playAndDisplay = (e) => {
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
        const button = buttonEl.current;
        button.classList.toggle('press');
        setTimeout(() => button.classList.toggle('press'), 75);
    }

    return (
        <button id={props.id} className="drum-pad" ref={buttonEl} onClick={playAndDisplay} >
            {props.padLabel}
            <audio id={props.padLabel} className="clip" ref={audioEl} src={props.url}></audio>
        </button>
    )
}