import React,{useState} from 'react'


export default function Textform(props) {
    const UpClick = () =>{
        let newText=text.toUpperCase
        setText(newText);
    }
    const UpChange = (event) =>{
        setText(event.target.value)
    }

    const[text,setText]=useState("Enter your text here");
    // setText(" ");
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={UpChange} id="Mybox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" type="button" onClick={UpClick}>
                Convert to UpperCase
            </button>
        </div> 
    )
}