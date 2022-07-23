import React from "react";
import GameScrenn from "./GameScreen";
import logo from "./assets/img/logo.png"

export default function InitialScreen () {
    const [dominy, setDominy] = React.useState(
    <div className='initial-Screen'>
        <img src={logo} alt='logo'/>
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