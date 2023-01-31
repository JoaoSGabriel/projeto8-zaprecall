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

    const [deck_Card, setDeck_Card] = React.useState([
        {question_Recall: 'O que é JSX?', answer_Recall: 'Uma extensão de linguagem do JavaScript'},
        {question_Recall: 'O React é __', answer_Recall: 'uma biblioteca JavaScript para construção de interfaces'},
        {question_Recall: 'Componentes devem iniciar com __', answer_Recall: 'letra maiúscula'},
        {question_Recall: 'Podemos colocar __ dentro do JSX', answer_Recall: 'expressões'},
        {question_Recall: 'O ReactDOM nos ajuda __ ', answer_Recall: 'interagindo com a DOM para colocar componentes React na mesma'},
        {question_Recall: 'Usamos o npm para __', answer_Recall: 'gerenciar os pacotes necessários e suas dependências'},
        {question_Recall: 'Usamos props para __', answer_Recall: 'passar diferentes informações para componentes '},
        {question_Recall: 'Usamos estado (state) para __', answer_Recall: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},]);

    function initRecall () {
        let vx = [];
        const game_Deck = [];
        let index = 0;
        let copy = 0
        while(copy < 4) {
            index = parseInt(Math.random()* deck_Card.length);
            vx = deck_Card.splice(index,1);
            game_Deck.push(vx[0]);
            copy = copy + 1;
        }
        setDeck_Card([...deck_Card, game_Deck]);
        setDominy(<GameScrenn game_Deck={game_Deck} restartRecall={restartRecall}/>)
    }

    function restartRecall () {
        setDominy(
        <div className='initial-Screen'>
            <img src={logo} alt='logo'/>
            <div>ZapRecall</div>
            <button onClick={initRecall}>Iniciar Recall!</button>
        </div>
        );
    }
    
    return (
        <>
            {dominy}
        </>
    );
}