import React, {useState} from 'react'

export default function TextForm(props) {
    
    const extractEmails= ()=>{
        console.log("extracted emails"+ text);
        let newText= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        setText(newText)
        props.showalert("Email extracted", "Success")
    }
    const extractmbile= ()=>{
        let newText= text.match(/[\+]?\d{10}|\(\d{3}\)\s?-\d{6}/);
        setText(newText==='null'?"":newText)
        props.showalert("Mobile no. extracted", "Success")
    }
       
    
    const clear= ()=>{
       
        setText("")
        props.showalert("Text Clear", "Success")
    }
    
    const handleOnChange= (event)=>{
        console.log("on change");
        setText(event.target.value)
        
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
     
        <div className='container my-2' >
           <div style={{color:props.mode==='dark'?'white':'#000000'}}> <h1>{props.Heading}</h1></div>
            <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange={handleOnChange} id="emybox" rows="8" style={{background:props.mode==='dark'?'#04070f':'white', color:props.mode==='dark'?'white':'#000000'}}></textarea>
            
            <button  className="btn btn-primary mx-2 my-3" onClick={extractEmails}>email extractor </button>
            <button className="btn btn-primary mx-2 my-3" onClick={extractmbile}>Mobile no. extractor </button>
            <button className="btn btn-primary mx-2 my-3" onClick={clear}>Clear </button>
          
        </div>
        
        </div></>
    )
}
