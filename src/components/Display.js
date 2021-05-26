export default function Display(props) {

    return props.power ? (
        <div id="display">
            <p>kit: 909</p>
            <p>sample: {props.soundLabel}</p>
            <p>vol: {props.volume}</p>
        </div>
    ) : (
        <div id="display">
            <p></p>
            <p style={{fontSize: "1.2em", textAlign: "center", flex: "0.4"}}>see you! : &#41;</p>
            <p></p>
        </div>
    )
}