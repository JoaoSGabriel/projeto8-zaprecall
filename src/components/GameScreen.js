import React from "react";

function FlashCard (props) {
    const {question_Recall, answer_Recall} = props;

    const [flashQuestion, setFlashQuestion] = React.useState('question');
    const [flashRecall, setFLashRecall] = React.useState('open-Question hidden');

    function viewQuestion () {
        setFlashQuestion('question hidden');
        setFLashRecall('open-Question');
    }
    
    const [backScreen, setBackScreen] = React.useState('back-Face');
    const [frontScreen, setFrontScreen] = React.useState('front-Face');

    function viewAnswer () {
        setBackScreen('back-Face rotate-Back');
        setFrontScreen('front-Face rotate-Front');
    }

    return (
        <>
            <div onClick={viewQuestion} className={flashQuestion}>
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className={flashRecall}>
                <div className={frontScreen}>
                    <p>{question_Recall}</p>
                    <img onClick={viewAnswer} src="./img/setinha.png" alt="answerView" />
                </div>
                <div className={backScreen}>
                    <p>{answer_Recall}</p>
                    <div>
                        <button>Não<br/>lembrei</button>
                        <button>Quase não lembrei</button>
                        <button>Zap!</button>
                    </div>
                </div>
            </div>
        </>
    );
}

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
            {deckCard.map((item, index) => <FlashCard key={index} question_Recall={item.question_Recall} answer_Recall={item.answer_Recall}/>)}
        </div>
        <div className="baseboard">
            <div className="questions-Complete">0/4 CONCLUÍDOS</div>
            <div className="questions-icons"></div>
        </div>
    </div>);
}