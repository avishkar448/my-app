import React,{useState} from "react";

export default function TextForm(props) {

    const handleClick=()=>{ 
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{ 
        //console.log(event.target.value)
        setText(event.target.value)
    }

    const handlelow=()=>{ 
      let newText=text.toLowerCase()
        setText(newText)
    }

    const handleClear=()=>{ 
        setText("")
    }

    const [text,setText]=useState("")
  return (
    <>
      <div className="constainer">
        <h2 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          style={{backgroundColor:props.mode==='light'? 'white':'#181313',color:props.mode==='light'?'black':'white'}}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleClick}>convert to uppercase</button>
      <button className="btn btn-info mx-2" onClick={handlelow}>convert to lowercase</button>
      <button className="btn btn-danger mx-2" onClick={handleClear}>clear text</button>
    
    <div className="container my-3 " style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words {text.length}  characters</p>
      <p>{0.008* text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter Something to preview"}</p>
    </div>
    </>
  );
}
