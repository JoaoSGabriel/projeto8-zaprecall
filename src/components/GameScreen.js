import React from "react";
import FlashCard from "./FlashCard"

const deckCard = [
    {question_Recall: 'O que é JSX?', answer_Recall: 'Uma extensão de linguagem do JavaScript'},
    {question_Recall: 'O React é __', answer_Recall: 'uma biblioteca JavaScript para construção de interfaces'},
    {question_Recall: 'Componentes devem iniciar com __', answer_Recall: 'letra maiúscula'},
    {question_Recall: 'Podemos colocar __ dentro do JSX', answer_Recall: 'expressões'}]

export default function GameScrenn (){

    return (
    <div className="game-Screen">
        <div className="banner">
            <img src="./img/logo.png" alt="logo"/>
            <p>ZapRecall</p>
        </div>
        <div className="deck-Questions">
            {deckCard.map((item, index) => <FlashCard key={index} number={index} question_Recall={item.question_Recall} answer_Recall={item.answer_Recall}/>)}
        </div>
        <div className="baseboard">
            <div className="questions-Complete">0/4 CONCLUÍDOS</div>
            <div></div>
        </div>
    </div>);
}