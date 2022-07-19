export default function GameScrenn (){
    return (
    <div className="game-Screen">
        <div className="banner">
            <img src="./img/logo.png" alt="logo"/>
            <p>ZapRecall</p>
        </div>
        <div className="deck-Questions">
            <div>
                <div className="question">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="open-Question">
                    <div className="front-Face  hidden">
                        <p>O que é JSX?</p>
                        <img src="./img/setinha.png" alt="answerView" />
                    </div>
                    <div className="back-Face">
                        <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                        <div>
                            <button>Não<br/>lembrei</button>
                            <button>Quase não lembrei</button>
                            <button>Zap!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="baseboard">
            <div className="questions-Complete">0/4 CONCLUÍDOS</div>
            <div className="questions-icons"></div>
        </div>
    </div>);
}