import React from "react";
import setinha from "./assets/img/setinha.png";

export default function FlashCard (props) {
    const {question_Recall, answer_Recall, number, redRecall, yellowRecall, greenRecall} = props

    const [flash_Question, setFlash_Question] = React.useState('question');
    const [flash_Recall, setFLash_Recall] = React.useState('open-Question hidden');
    
    function viewQuestion () {
        setFlash_Question('question hidden');
        setFLash_Recall('open-Question');
    }

    const [back_Screen, setBack_Screen] = React.useState('back-Face');
    const [front_Screen, setFront_Screen] = React.useState('front-Face');

    function viewAnswer () {
        setBack_Screen('back-Face rotate-Back');
        setFront_Screen('front-Face rotate-Front');
    }

    const [flash_Result, setFlash_Result] = React.useState(<div></div>);
    
    function hideFlashCard (text){
        setFLash_Recall('open-Question hidden');
        setFlash_Question('question hidden');
        if (text === 'red') {
            redRecall();
            setFlash_Result(
                <div className="question risk red">
                    <p>Pergunta {number}</p>
                    <ion-icon style={{color: "#FF3030"}} name="close-circle"></ion-icon>
                </div>
            );
        } else if (text === 'yellow') {
            yellowRecall();
            setFlash_Result(
                <div className="question risk yellow">
                    <p>Pergunta {number}</p>
                    <ion-icon style={{color: "#FF922E"}} name="help-circle"></ion-icon>
                </div>
            );
        } else if (text === 'green'){
            greenRecall();
            setFlash_Result(
                <div className="question risk green">
                    <p>Pergunta {number}</p>
                    <ion-icon style={{color: "#2FBE34"}} name="checkmark-circle"></ion-icon>
                </div>
            );
        }
    }

    return (
        <>  
            {flash_Result}
            <div onClick={viewQuestion} className={flash_Question}>
                <p>Pergunta {number}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className={flash_Recall}>
                <div className={front_Screen}>
                    <p>{question_Recall}</p>
                    <img onClick={viewAnswer} src={setinha} alt="answerView" />
                </div>
                <div className={back_Screen}>
                    <p>{answer_Recall}</p>
                    <div>
                        <button onClick={() => hideFlashCard('red')}>Não<br/>lembrei</button>
                        <button onClick={() => hideFlashCard('yellow')}>Quase não lembrei</button>
                        <button onClick={() => hideFlashCard('green')}>Zap!</button>
                    </div>
                </div>
            </div>
        </>
    );
}