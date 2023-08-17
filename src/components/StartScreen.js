import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
       <div className="title">
        <h1 className="dinamic">Secret <span className="letters">W</span>ords</h1>
        </div>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen