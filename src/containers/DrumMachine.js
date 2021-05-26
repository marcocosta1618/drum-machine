import { useEffect, useState } from 'react';

import PadBank from '../components/PadBank';
import PowerButton from '../components/PowerButton';
import soundBank from '../soundData/soundBank';

export default function DrumMachine() {

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        // cleanup function on unmount:
        return () => window.removeEventListener('keydown', handleKeydown);
    }, []); // empty dependencies array => run useEffect only after first render


    const handleKeydown = function(e) {
        let clicked = soundBank.find((soundData) => {
            return soundData.padLabel === e.key.toUpperCase();
          });
        clicked !== undefined && document.getElementById(clicked.id).click();
    }

    const [ power, setPower ] = useState(true);
    const powerSwitch = function() {
        setPower(!power);
    }

    return (
        <div id="drum-machine" tabIndex="-1" >
            <PadBank  power={power}/>
            <PowerButton power={power} powerSwitch={powerSwitch} />
        </div>
    );
}