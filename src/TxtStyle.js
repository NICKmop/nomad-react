import { useState } from 'react';

function TxtStyle({text}){
    const [item, setItem] = useState("");

    return <h1>{text}</h1>
}

export { TxtStyle };