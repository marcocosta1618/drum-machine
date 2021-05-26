import React, { useRef } from 'react';
//import soundBank from '../soundData/soundBank';

export default function DrumPad(props) {

    // create a reference for the audio element
    const audioEl = useRef(null);
    // create a reference for the button element
    const buttonEl = useRef(null);

    const handleClick = function(e) {
        // play sound and prevent Uncaught(in promise) DOMException when running
        // FCC test suite in Chrome:
        const sound = audioEl.current;
        sound.currentTime = 0;
        let playPromise = sound.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => { })
                .catch(error => {
                    console.log(error);
                })
        }
        // update display
        props.updateDisplay(e.target.id);
        // lightning button on keypresses
        const button = buttonEl.current;
        button.classList.toggle('press');
        setTimeout(() => button.classList.toggle('press'), 75);
    }

    return (
        <button id={props.id} className="drum-pad" ref={buttonEl} onClick={handleClick} >
            {props.padLabel}
            <audio id={props.padLabel} className="clip" ref={audioEl} src={props.url}></audio>
        </button>
    )
}