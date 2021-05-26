import React, { useState } from 'react';

import Display from './Display';
import DrumPad from './DrumPad';
import soundBank from '../soundData/soundBank';


// PadBank creates a DrumPad for each object in soundBank array
function PadBank() {

    const [ soundLabel, setSoundLabel ] = useState("");
    const updateDisplay = function(e) {
        setSoundLabel(e);
    }

    return (
        <div id="padBank">
            <Display soundLabel={soundLabel} />
            {/* return a DrumPad component for each object in soundBank */}
            {soundBank.map((soundData) => {
                return (
                    <DrumPad
                        updateDisplay={updateDisplay}
                        padLabel={soundData.padLabel}
                        id={soundData.id}
                        key={soundData.id} // unique key attribute for React
                        url={soundData.url} 
                    />
                )
            })}
        </div>
    )
}

export default PadBank;