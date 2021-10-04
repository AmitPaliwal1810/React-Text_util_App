import React from 'react'

export default function Alert(props) {
    // function to change the first letter into captital case
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
    return (
        props.alert && <div className="container">
            <div class={`alert alert-${props.alert.type} `} role="alert">
                <strong> {capitalize(props.alert.type)} </strong> : {props.alert.msg}
            </div>
        </div>
    )
}
