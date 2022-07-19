export default function GameScrenn (){
    return (
    <div className="game-Screen">
        <div className="banner">
            <img src="./img/logo.png" alt="logo"/>
            <p>ZapRecall</p>
        </div>
        <div className="deck-Questions">
            <div className="question">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question">
                <p>Pergunta 2</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question">
                <p>Pergunta 3</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question">
                <p>Pergunta 4</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </div>
    </div>);
}