import React from "react";
import GameScrenn from "./GameScreen";

export default function InitialScreen () {
    const [dominy, setDominy] = React.useState(
    <div className='initial-Screen'>
        <img src='./img/logo.png' alt='logo'/>
        <div>ZapRecall</div>
        <button onClick={initRecall}>Iniciar Recall!</button>
    </div>);

    function initRecall () {
        setDominy(<GameScrenn />)
    }
    
    return (
        <div>
            {dominy}
        </div>
    );
}