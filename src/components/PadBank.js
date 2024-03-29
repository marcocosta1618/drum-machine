import { useState } from 'react';

import Display from './Display';
import DrumPad from './DrumPad';
import Volume from '../components/Volume';
import soundBank from '../soundData/soundBank';


// PadBank creates a DrumPad for each object in soundBank array
function PadBank(props) {

    const [soundLabel, setSoundLabel] = useState("");
    const updateDisplay = function (e) {
        setSoundLabel(e);
    }

    const [volume, setVolume] = useState(40);
    const handleChange = function (e, value) {
        setVolume(value);
    }

    return (
        <div id="padBank">
            <Display soundLabel={soundLabel}
                volume={volume}
                power={props.power}
            />
            {/* return a DrumPad component for each object in soundBank */}
            <div id="pad-div">
                {soundBank.map((soundData) => {
                    return (
                        <DrumPad
                            updateDisplay={updateDisplay}
                            padLabel={soundData.padLabel}
                            volume={volume}
                            power={props.power}
                            id={soundData.id}
                            key={soundData.id} // unique key attribute for React
                            url={soundData.url}
                        />
                    )
                })}
            </div>
            <Volume volume={volume}
                handleChange={handleChange}
                power={props.power}
            />
        </div>
    )
}

export default PadBank;