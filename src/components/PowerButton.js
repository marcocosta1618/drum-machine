export default function PowerButton(props) {
    
    return (
        <div className="powerSwitch-div">
            <input type="button" 
                   onClick={props.powerSwitch} >
            </input>
        </div>
    )
}