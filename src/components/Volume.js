import Slider from '@material-ui/core/Slider';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

export default function Volume(props) {

    return (
        <>
            <div id="volume-div">
                <VolumeDownIcon className={props.power ? "on" : "off"} />
                <Slider
                    value={props.volume}
                    onChange={props.handleChange}
                    disabled={!props.power}
                    className={props.power ? "on" : "off"}
                />
                <VolumeUpIcon className={props.power ? "on" : "off"} />
            </div>
            <p>volume</p>
        </>
    )
}
