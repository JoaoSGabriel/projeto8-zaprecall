import React from "react";
import FlashCard from "./FlashCard";
import logo from "./assets/img/logo.png";
import sadFace from "./assets/img/sad.png";
import happyFace from "./assets/img/party.png";

export default function GameScrenn ({restartRecall, game_Deck}){
    const [answer_Icon, setAnswer_Icon] = React.useState([]);
    const [answered_Questions, setAnswered_Questions] = React.useState(0);
    const [wrong_Question, setWrong_Question] = React.useState(0);

    function redRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#FF3030"}} name="close-circle"></ion-icon>]);
        setAnswered_Questions(answered_Questions + 1);
        setWrong_Question(1);
        lastMessage ('red');
    }

    function yellowRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#FF922E"}} name="help-circle"></ion-icon>]);
        setAnswered_Questions(answered_Questions + 1);
        lastMessage ('yellow');
    }

    function greenRecall () {
        setAnswer_Icon([...answer_Icon, <ion-icon style={{color: "#2FBE34"}} name="checkmark-circle"></ion-icon>]);
        setAnswered_Questions(answered_Questions + 1);
        lastMessage ('green');
    }
    
    const [restart_Button, setRestartButton] = React.useState('');
    const [final_Message, setFinalMessage] = React.useState('');
    function lastMessage (text) {
        while (answered_Questions < 3) {
            return;
        }

        if (wrong_Question > 0 || text === 'red') {
            setFinalMessage(
                <div className="final-Message">
                    <div>
                        <img src={sadFace} alt="final-Message"/>
                        Puts
                    </div>
                    <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
                </div>
            );
        } else {
            setFinalMessage (
                <div className="final-Message">
                    <div>
                        <img src={happyFace} alt="final-Message"/>
                        Parabéns!
                    </div>
                    <p>Você não esqueceu de<br/>nenhum flashCard</p>
                </div>
            );
        }
        setRestartButton(
            <button onClick={restartRecall}>REINICIAR RECALL</button>
        );
    }

    return (
    <div className="game-Screen">
        <div className="banner">
            <img src={logo} alt="logo"/>
            <p>ZapRecall</p>
        </div>
        <div className="deck-Questions">
            {game_Deck.map((item, index) => <FlashCard key={index} number={index+1} question_Recall={item.question_Recall} answer_Recall={item.answer_Recall} redRecall={redRecall} yellowRecall={yellowRecall} greenRecall={greenRecall}/>)}
        </div>
        <div className="baseboard">
            {final_Message}
            <div className="questions-Complete">{answered_Questions}/4 CONCLUÍDOS</div>
            <div className="answer-Icon">{answer_Icon}</div>
            {restart_Button}
        </div>
    </div>);
}