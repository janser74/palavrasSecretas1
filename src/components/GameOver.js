import"./End.css";

const End = ({retry, score}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>A sua pontuação foi: {score}</h2>
      <p>Não desista, vamos tentar novamente.</p>
      <button onClick={retry}>Começar de novo</button>
    </div>
  )
}

export default End