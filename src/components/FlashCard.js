import React from "react";

export default function FlashCard (props) {
    const {question_Recall, answer_Recall, number} = props;

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

    function recall (text) {
        setFlashQuestion('question')
        setFLashRecall('open-Question hidden');

        if (text === 'red') {
            console.log('Marcou vermelho')
        } else if (text === 'yellow') {
            console.log('Marcou amarelo')
        } else if (text === 'green') {
            console.log('Marcou verde')
        }
    }
    
    return (
        <>
            <div onClick={viewQuestion} className={flashQuestion}>
                <p>Pergunta {number}</p>
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
                        <button onClick={() => recall('red')}>Não<br/>lembrei</button>
                        <button onClick={() => recall('yellow')}>Quase não lembrei</button>
                        <button onClick={() => recall('green')}>Zap!</button>
                    </div>
                </div>
            </div>
        </>
    );
}