import React, { useState } from 'react';

export default function TextForm(props) {
    let flag = true;
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase" , "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
       
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase" , "success");
    }
    const handleClearClick = () =>{
        let newtext = text;
        newtext = " ";
        setText(newtext);
    }

    const handleDarkClick = () => {
        
        const element = document.getElementById("myBox");
        if(flag){
            element.classList.add("text-light");
            element.classList.add("bg-dark");
            document.getElementById("mode").innerHTML="Light_mode"
            flag = false;
            
        }
        else {
            element.classList.remove("text-light");
            element.classList.remove("bg-dark");
            document.getElementById("mode").innerHTML="Dark_mode"
            flag = true;
        }
        
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipBoard" , "success");
    }

    const [text , setText] = useState('');
    return (<>
            <div className="container">
                <div className="mb-3">
                    <div className="mb-3">
                    <label htmlFor="myBox" className="form-label" style={{color: props.mode === 'light' ? 'black' : 'white'}} ><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                    <div className="container-fluid">
                        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Upper-case</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleLowerClick}>Convert to Lower-case</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear the Screen</button>
                        <button id="mode" className="btn btn-primary my-2 mx-2" onClick={handleDarkClick}>Dark-Mode</button>
                        <button id="mode" className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="container my-4">
                <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>Your text Summary</h1>
                <p style={{color: props.mode === 'light' ? 'black' : 'white'}}>{text.split(" ").length} words and {text.length} chracters</p>
                <p style={{color: props.mode === 'light' ? 'black' : 'white'}}>In {(0.008 * text.split(" ").length)} can read the word</p>
                <h2 style={{color: props.mode === 'light' ? 'black' : 'white'}}>Preview</h2>
                <p style={{color: props.mode === 'light' ? 'black' : 'white'}}>{text}</p>
            </div>
            
        </>
    )
}