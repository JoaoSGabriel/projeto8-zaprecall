import React from "react";

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

    return (
        <>
            <div onClick={viewQuestion} className={flash_Question}>
                <p>Pergunta {number}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className={flash_Recall}>
                <div className={front_Screen}>
                    <p>{question_Recall}</p>
                    <img onClick={viewAnswer} src="./img/setinha.png" alt="answerView" />
                </div>
                <div className={back_Screen}>
                    <p>{answer_Recall}</p>
                    <div>
                        <button onClick={redRecall}>Não<br/>lembrei</button>
                        <button onClick={yellowRecall}>Quase não lembrei</button>
                        <button onClick={greenRecall}>Zap!</button>
                    </div>
                </div>
            </div>
        </>
    );
}