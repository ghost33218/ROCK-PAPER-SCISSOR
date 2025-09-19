let Computermove ; 
let score = { 
    win : 0 , 
    lose : 0 , 
    tie : 0 
} ; 

let playerchoice ; 
let resultt

function computerchoice () { 
    let x = Math.random() ; 
 
    if(x>=0 && x<1/3) {
        Computermove = 'rock' ; 
    }
    else if(x>1/3 && x<2/3)  {
        Computermove = 'scissor' ; 
    }
    else { 
        Computermove = 'paper' ; 
    }
}
console.log(computermove) ; 
function resetscore () { 
     score = {
      win : 0 , 
      lose : 0 , 
      tie : 0 
     }
    
     let showingreset = document.querySelector('.js-displayingresult') ; 
     showingreset.innerHTML = `<pre>
     
     
     
     
   RESETED SCORE 
     
   
    win : 0 lose : 0 tie : 0 ` ; 
     


}

function result(playermove) { 
    playerchoice = playermove ; 
    computerchoice() ; 
   if(playermove == 'rock') {
      if(Computermove == 'rock') {
        resultt = "TIE" ; 
        
        console.log("tie") ;
        score.tie++ ;  
      }
      else if(Computermove == 'scissor') { 
        resultt = 'WIN' ; 
        console.log("win") ; 
        score.win++
      }
      else { 
        resultt = 'LOSE' ;
        console.log("lose") ; 
        score.lose++
      }
   }

   else if(playermove == "scissor") { 
          if(Computermove == 'rock') {
             resultt = 'LOSE' ; 
            console.log("lose") ; 
            score.lose++
      }
      else if(Computermove == 'scissor') { 
        resultt = "TIE" ; 
        console.log("tie") ; 
        score.tie++ ; 
      }
      else { 
          resultt = 'WIN' ; 
        console.log("win") ; 
        score.win++ ; 
      }
   }

   else {
        if(Computermove == 'rock') {
              resultt = 'WIN' ; 
        console.log("win") ; 
        score.win++ ; 
      }
      else if(Computermove == 'scissor') { 
        resultt = 'LOSE' ;
        console.log("lose") ; 
        score.lose++
      }
      else { 
          resultt = "TIE" ; 
        console.log("tie") ; 
        score.tie++ ; 
      }
   }
   let scoreshowing = document.querySelector('.js-displayingresult') ; 
   scoreshowing.innerHTML = `<pre> 

    ${resultt} 
   Your : <img class="js-elementimage" src="photos/${playerchoice}-emoji.png"> Computer Move : <img class="js-elementimage" src="photos/${Computermove}-emoji.png"> 
   SCORE : 
   win : ${score.win} lose : ${score.lose} tie:${score.tie}</pre> <button onclick="resetscore()" class="js-buttonresetscore">Reset Score `
   ; 
}