import { useEffect, useRef, useState } from "react";
export default function Input(props) {
    
    const input = useRef(null);
    const [state, setState] = useState(props.value);
    const controlInput = (e) => {
        setState(input.current.value);
    }

    

    useEffect(() => {
        const handleChange = () => {

            if (input.current.value.trim() === '') {
                input.current.classList.add('required');
                props.sendSetter(false);
            } else {
                input.current.classList.remove('required');
                props.sendSetter(true);
            }
        }
        handleChange();
        props.collectUserInfo(props.setter, state);
    }, [state, props])

    if (props.readonly) {
        return (
            <div className={`${props.class}`}>
                <label htmlFor={props.id}>{props.name}</label>
                <input readOnly ref={input} type={props.type} name={props.name} id={props.id} value={state}/>
            </div>
        )
    } 

    return (
        <div className={`${props.class}`}>
            <label htmlFor={props.id}>{props.name}</label>
            <input ref={input} onChange={(e) => controlInput(e)} type={props.type} name={props.name} id={props.id} placeholder={props.value} value={state}/>
        </div>
    )
}