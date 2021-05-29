export default function PowerButton(props) {
    
    return (
        <div className="powerBtn-div">
            <input type="button" 
                   id="power"
                   onClick={props.powerSwitch} >
            </input>
            <label htmlFor="power">power</label>
        </div>
    )
}