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

    const [question_Icon, setQuestion_Icon] = React.useState(<ion-icon name="play-outline"></ion-icon>)
    
    function hideFlashCard (text){
        setFLash_Recall('open-Question hidden');
        if (text === 'red') {
            redRecall();
            setFlash_Question('question risk red');
            setQuestion_Icon(<ion-icon style={{color: "#FF3030"}} name="close-circle"></ion-icon>);
        } else if (text === 'yellow') {
            yellowRecall();
            setFlash_Question('question risk yellow');
            setQuestion_Icon(<ion-icon style={{color: "#FF922E"}} name="help-circle"></ion-icon>);
        } else if (text === 'green'){
            greenRecall();
            setFlash_Question('question risk green');
            setQuestion_Icon(<ion-icon style={{color: "#2FBE34"}} name="checkmark-circle"></ion-icon>);
        }
    }

    return (
        <>  
            <div onClick={viewQuestion} className={flash_Question}>
                <p>Pergunta {number}</p>
                {question_Icon}
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