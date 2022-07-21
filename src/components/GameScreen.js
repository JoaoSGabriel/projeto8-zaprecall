import React from "react";
import FlashCard from "./FlashCard"

const deckCard = [
    {question_Recall: 'O que é JSX?', answer_Recall: 'Uma extensão de linguagem do JavaScript'},
    {question_Recall: 'O React é __', answer_Recall: 'uma biblioteca JavaScript para construção de interfaces'},
    {question_Recall: 'Componentes devem iniciar com __', answer_Recall: 'letra maiúscula'},
    {question_Recall: 'Podemos colocar __ dentro do JSX', answer_Recall: 'expressões'}]

export default function GameScrenn (){
    const [answer_Icon, setAnswer_Icon] = React.useState([]);
    const [resolve_Questions, setResolve_Questions] = React.useState(0)

    function redRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#FF3030"}} name="close-circle"></ion-icon>]);
        setResolve_Questions(resolve_Questions + 1)
    }

    function yellowRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#FF922E"}} name="help-circle"></ion-icon>]);
        setResolve_Questions(resolve_Questions + 1)
    }

    function greenRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#2FBE34"}} name="checkmark-circle"></ion-icon>]);
        setResolve_Questions(resolve_Questions + 1)
    }

    return (
    <div className="game-Screen">
        <div className="banner">
            <img src="./img/logo.png" alt="logo"/>
            <p>ZapRecall</p>
        </div>
        <div className="deck-Questions">
            {deckCard.map((item, index) => <FlashCard key={index} number={index} question_Recall={item.question_Recall} answer_Recall={item.answer_Recall} redRecall={redRecall} yellowRecall={yellowRecall} greenRecall={greenRecall}/>)}
        </div>
        <div className="baseboard">
            <div className="questions-Complete">{resolve_Questions}/4 CONCLUÍDOS</div>
            <div>{answer_Icon}</div>
        </div>
    </div>);
}