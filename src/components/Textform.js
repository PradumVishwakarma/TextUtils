import React, { useState } from 'react';

export default function Textform(props) {

    const pradum = (event) => {
        // console.log("My name is pradum");
        setname(event.target.value);
    }

    const vish = () => {
        // console.log("My name is Vishwakarma " + name1);
        let newtext = name1.toUpperCase();
        setname(newtext)
        props.showalert(" Converted To UpperCase", "sucessfully");
        document.title="React Project: UpperCase";
    }

    const vish2 = () => {
        // console.log("My name is Vishwakarma2 " + name1);
        let newtext = name1.toLowerCase();
        setname(newtext)
        props.showalert(" Converted To LowerCase", "sucessfully");
        document.title="React Project: LowerCase";
    }

    const vish3 = () => {
        let newtext = "";
        setname(newtext)
        props.showalert( "Text Is Removed", "sucessfully");
        document.title="React Project: Remove Text";
    }
    
    const vish4 = () => {
        // var text=document.getElementById("mybox");
        // text.select();

        navigator.clipboard.writeText(name1);

        // document.getSelection().removeAllRanges();
        
        props.showalert(" Text Is Copied", "sucessfully");
        document.title="React Project: Copied";
    }
    
    const vish5 = () => {
        let newText = name1.split(/[ ]+/);
        setname(newText.join(" "))
        props.showalert(" Extra Spaces Are Removed", "sucessfully");
        document.title="React Project: Extra Space Remove Text";
    }
    

    const [name1, setname] = useState('',false);
    return (
        <>
            <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>

                <h1 className='mb-3'>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" style={{backgroundColor:props.mode ==="dark"?"rgb(30 123 138)":"white"}} value={name1} onChange={pradum} id="mybox" rows="10"></textarea>
                </div>
                <button disabled={name1.length===0} className="my-2 btn btn-primary" onClick={vish}>Convert to UpperCase</button>
                <button disabled={name1.length===0} className="my-2 mx-1 btn btn-primary" onClick={vish2}>Convert to LowerCase</button>
                <button disabled={name1.length===0} className="my-2 mx-1 btn btn-primary" onClick={vish3}>ClearText</button>
                <button disabled={name1.length===0} className="my-2 mx-1 btn btn-primary" onClick={vish4}>CopyText</button>
                <button disabled={name1.length===0} className="my-2 mx-1 btn btn-primary" onClick={vish5}>RemoveExtraSpace</button>
            </div>
            <div className="conatiner my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1 className='my-3'>Your Text Summary</h1>
                <p>Number of {name1.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, Number of character {name1.length}</p>
                <p>Number of {0.008 * name1.split(" ").filter((element)=>{return element.length!==0}).length}</p>
            </div>

            <div className="conatiner my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1>Preview</h1>
                <p>{name1.length>0?name1:"Nothing to Preview"}</p>
            </div>
        </>
    );
}

