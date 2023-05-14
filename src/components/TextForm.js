import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, settext] = useState('');
    // text="hello we are here"; //this this wrong way to change the state
    // settext("right way to change the state") //this is right way
    const handleUpClick = () => {
        console.log("upper click change " + text);
        let newText = text.toUpperCase(); //change to upper case value
        settext(newText);
        props.showalert(" Converted into upper case","success");
    }
    const handleLoClick = () => {
        console.log("lower click change " + text);
        let newText = text.toLowerCase(); //change to lower case value
        settext(newText);
        props.showalert(" Converted into lower case","success");
    }
    const handleClearClick = () => {
        console.log("clear " + text);
        let newText = ""; //clear the values
        settext(newText);
        props.showalert(" Clear successfully","success");
    }
    const handleRevClick = () => {
        let newText = text.split('').reverse().join(''); //reverse the string split function split the string into one-one character and reverse just reverse the all character and join function just join all character and convert it into string
        settext(newText);
        console.log("Reverse order " + newText);
        props.showalert(" Converted into Reverse order","success");
    }
    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showalert(" copied","success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showalert(" removed extra spaces","success");
    }

    const handleonChange = (event) => {
        console.log("onChange ");
        settext(event.target.value); //this will update the value of text jo bhi new character add karenge vo text me bhi change hogi
    }
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert text into uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert text into lowerecase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleRevClick}>convert text into reverse order</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra space</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                {/* text.split(" ").length helps to counts the words with the help of (" ") and text.length tells about length of character */}
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                {/* how much time take to read the words */}
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text in te box to preview it"}</p>
            </div>
        </>

    )
}
