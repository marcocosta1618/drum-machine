import Slider from '@material-ui/core/Slider';

export default function Volume(props) {

    return (
        <Slider value={props.volume} 
                onChange={props.handleChange} 
                disabled={!props.power}
        />
    )
}
