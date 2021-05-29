import { useRef } from 'react';

export default function DrumPad(props) {

    // create a reference for the audio element
    const audioEl = useRef(null);
    // create a reference for the button element
    const buttonEl = useRef(null);

    const handleClick = function(e) {
        // play sound (and prevent promise errors when running
        // FCC test suite in Chrome):
        const sound = audioEl.current;
        // <audio /> volume range is 0. - 1.
        sound.volume = props.volume * 0.01;
        sound.currentTime = 0;
        let playPromise = sound.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => { })
                .catch(error => {
                    console.log(error);
                })
        }
        // update display and flashes pads
        props.updateDisplay(e.target.id);
        // lightning button on keypresses by rapidly toggling CSS classes
        const button = buttonEl.current;
        button.classList.toggle('press');
        setTimeout(() => button.classList.toggle('press'), 75);
    }

    return (
        <button id={props.id} 
                className={props.power ? "drum-pad" : "drum-pad off"} 
                ref={buttonEl} 
                onClick={handleClick} 
                disabled={!props.power} 
                autoComplete="off" >
            {props.padLabel}
            <audio id={props.padLabel} 
                   className="clip" 
                   ref={audioEl} 
                   src={props.url}>
            </audio>
        </button>
    )
}