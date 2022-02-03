export default function Button (props) {
    return (
            <button onClick={props.click} className={`${props.class}`}>{props.title}</button>
    )
}