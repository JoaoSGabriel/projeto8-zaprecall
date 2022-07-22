import React from "react";

export default function FlashCard (props) {
    const {question_Recall, answer_Recall, number, redRecall, yellowRecall, greenRecall} = props

    const [flash_Question, setFlash_Question] = React.useState('question');
    const [flash_Recall, setFLash_Recall] = React.useState('open-Question hidden');

    const [back_Screen, setBack_Screen] = React.useState('back-Face');
    const [front_Screen, setFront_Screen] = React.useState('front-Face');

    function viewAnswer () {
        setBack_Screen('back-Face rotate-Back');
        setFront_Screen('front-Face rotate-Front');
    }

    const [flash_Question_Structure, setFlash_Question_Structure] = React.useState(
        <div onClick={viewQuestion} className={flash_Question}>
            <p>Pergunta {number}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
    
    function viewQuestion () {
        setFlash_Question('question hidden');
        setFLash_Recall('open-Question');
    }

    function hideFlashCard (text){
        setFLash_Recall('open-Question hidden');
        if (text === 'red') {
            redRecall();
            setFlash_Question_Structure(
                <div className="answered-Question question">
                    <p style={{color: "#FF3030"}}>Pergunta {number}</p>
                    <ion-icon style={{color: "#FF3030"}} name="close-circle"></ion-icon>
                </div>
            );
        } else if (text === 'yellow') {
            yellowRecall();
            setFlash_Question_Structure(
                <div className="answered-Question question">
                    <p style={{color: "#FF922E"}}>Pergunta {number}</p>
                    <ion-icon style={{color: "#FF922E"}} name="help-circle"></ion-icon>
                </div>
            );
        } else if (text === 'green'){
            greenRecall();
            setFlash_Question_Structure(
                <div className="answered-Question question">
                    <p style={{color: "#2FBE34"}}>Pergunta {number}</p>
                    <ion-icon style={{color: "#2FBE34"}} name="checkmark-circle"></ion-icon>
                </div>
            );
        }
    }

    return (
        <>  
            {flash_Question_Structure}
            <div className={flash_Recall}>
                <div className={front_Screen}>
                    <p>{question_Recall}</p>
                    <img onClick={viewAnswer} src="./img/setinha.png" alt="answerView" />
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