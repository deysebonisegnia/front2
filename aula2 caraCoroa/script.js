 //jogo de cara ou coroa
 
 function flipCoin(){
   return  Math.floor(Math.random() *2);
}
function getCoinFace (coinFlip) {
 
    return coinFlip === 0 ? "Cara" : "Coroa";

} 

function playGame () {    
    const numRounds = parseInt( prompt("Quantas rodadas você quer jogar?"));
    let score = 0;
    for (let i = 0; i < numRounds; i++) {
    const coinFlip = flipCoin();
    const coinFace = getCoinFace(coinFlip);
    const guess = prompt('você aposta em cara ou coroa?');
    if (guess.toLowerCase() === coinFace.toLowerCase()) {
        console.log (`você apostou em ${guess} e a moeda deu ${coinFace}.Você marcou ponto`);
        score++;

    }else{
        console.log (`você apostou em ${guess} e a moeda deu ${coinFace}.Você errou`);
        
    }
}
console.log(`Fim de Jogo! Sua pontuação é ${score} de ${numRounds} rodadas jogadas`)

}
playGame();

