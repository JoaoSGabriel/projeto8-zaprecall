import React from "react";
import FlashCard from "./FlashCard"

const deckCard = [
    {question_Recall: 'O que é JSX?', answer_Recall: 'Uma extensão de linguagem do JavaScript'},
    {question_Recall: 'O React é __', answer_Recall: 'uma biblioteca JavaScript para construção de interfaces'},
    {question_Recall: 'Componentes devem iniciar com __', answer_Recall: 'letra maiúscula'},
    {question_Recall: 'Podemos colocar __ dentro do JSX', answer_Recall: 'expressões'}]

export default function GameScrenn (){
    const [answer_Icon, setAnswer_Icon] = React.useState([]);
    const [answered_Questions, setAnswered_Questions] = React.useState(0);
    const [wrong_Question, setWrong_Question] = React.useState(0);

    function redRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#FF3030"}} name="close-circle"></ion-icon>]);
        setAnswered_Questions(answered_Questions + 1);
        setWrong_Question(1);
        lastMessage ();
    }

    function yellowRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#FF922E"}} name="help-circle"></ion-icon>]);
        setAnswered_Questions(answered_Questions + 1);
        lastMessage ();
    }

    function greenRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#2FBE34"}} name="checkmark-circle"></ion-icon>]);
        setAnswered_Questions(answered_Questions + 1);
        lastMessage ();
    }

    const [final_Message, setFinalMessage] = React.useState('');
    function lastMessage () {
        while (answered_Questions < 3) {
            return;
        }
        if (wrong_Question > 0) {
            setFinalMessage(
                <div className="final-Message">
                    <div>
                        <img src="./img/sad.png" alt="final-Message"/>
                        Puts
                    </div>
                    <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
                </div>
            );
        } else {
            setFinalMessage (
                <div className="final-Message">
                    <div>
                        <img src="./img/party.png" alt="final-Message"/>
                        Parabéns!
                    </div>
                    <p>Você não esqueceu de<br/>nenhum flashCard</p>
                </div>
            );
        }
    }

    return (
    <div className="game-Screen">
        <div className="banner">
            <img src="./img/logo.png" alt="logo"/>
            <p>ZapRecall</p>
        </div>
        <div className="deck-Questions">
            {deckCard.map((item, index) => <FlashCard key={index} number={index+1} question_Recall={item.question_Recall} answer_Recall={item.answer_Recall} redRecall={redRecall} yellowRecall={yellowRecall} greenRecall={greenRecall}/>)}
        </div>
        <div className="baseboard">
            {final_Message}
            <div className="questions-Complete">{answered_Questions}/4 CONCLUÍDOS</div>
            <div className="answer-Icon">{answer_Icon}</div>
        </div>
    </div>);
}