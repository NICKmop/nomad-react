import {useEffect, useState} from 'react';

function Span(){
    const [text, setText] = useState("span text");

    const onClickTest = () => {
        setText(text => text + "span text add");
    }

    useEffect(() => {
        console.log("data change Test")
    },[text])

    return (
        <div>
            <span>{text}</span>
            <button onClick={onClickTest}>CHANGE TEXT</button>
        </div>
    );
}

export default Span;