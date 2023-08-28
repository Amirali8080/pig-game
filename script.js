'use strict';

//document.querySelector('#current--' + activePlayer).textContent=dice;
// document.getElementById('score--0').textContent='0';
// document.getElementById('score--1').textContent='0';
// document.getElementById('current--0').textContent='0';
// document.getElementById('current--1').textContent='0';

// function nextPlayer(){
//     activePlayer===0 ? activePlayer=1 : activePlayer=0;
//     roundScores=0;
//      document.getElementById('current--0').textContent='0';
//      document.getElementById('current--1').textContent='0';

//      document.querySelector('.player--0').classList.toggle('player--active');
//      document.querySelector('.player--1').classList.toggle('player--active');
// }


// document.querySelector('.dice').style.display='none';

// document.querySelector('.btn--roll').addEventListener('click',function(){
//     dice=Math.floor(Math.random()*6)+1;
//      diceDOM=document.querySelector('.dice');
//      diceDOM.style.display='block';
//      diceDOM.src='dice-'+ dice +'.png';
     
//      if (dice !==1){
//       roundScores+= dice;
//       document.querySelector('#current--' + activePlayer).textContent=roundScores;
//     }
//     else{
//      nextPlayer();
//     }

// })

// document.querySelector('.btn--hold').addEventListener('click',function(){
    
//     scores[activePlayer] += roundScores;
//     document.querySelector('#score--' + activePlayer).textContent=scores[activePlayer]
    
//     //winner
//     if (scores[activePlayer]>=20) {
//         document.querySelector('#name--' +activePlayer).textContent='WINNER!';
//         document.querySelector('.player--' + activePlayer).classList.add('player--winner');
//         document.querySelector('.player--' + activePlayer).classList.remove('active');
//         document.querySelector('.dice').style.display='none';
//     }
//     else{
//         nextPlayer();
//     }
// })

//////  SELECTING ELEMENTS
   const player0EL = document.querySelector('.player--0');
   const player1EL = document.querySelector('.player--1');
   const score0EL = document.getElementById('score--0');
   const score1EL = document.getElementById('score--1');
   const current0EL = document.getElementById('current--0');
   const current1EL = document.getElementById('current--1');

   const diceEL = document.querySelector('.dice');
   const btnNew = document.querySelector('.btn--new');
   const btnRoll = document.querySelector('.btn--roll');
   const btnHold = document.querySelector('.btn--hold');
   
/////  STARTING CONDITION 
   const startGame = function(){
    score0EL.textContent = 0 ;
   score1EL.textContent = 0 ;
   diceEL.classList.add('hidden');
   }
   startGame();
   
   let playing = true ;
   let scores = [0,0] ;
   let activePlayer = 0 ;
   let currentScore = 0 ;
   

   const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
   }
//////  ROLLING DICE FUNCTIONALITY
    btnRoll.addEventListener('click', function(){
        if(playing){
     // 1. generating random number
     const dice = Math.trunc(Math.random()*6) + 1 ;
     console.log(dice);

     // 2. display dice 
     diceEL.classList.remove('hidden');
     diceEL.src = `dice-${dice}.png`;
     
     // 3. check for rolled 1
     if(dice !== 1){
       // Add dice to current score
       currentScore += dice ;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore;

     }else{
       // switch to next player
        switchPlayer();
     }
    }
    })

////////// HOLD BUTTON FUNCTIONALITY

      btnHold.addEventListener('click', function(){
        if(playing){
        /// 1.ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
           scores[activePlayer] += currentScore;
           document.getElementById(`score--${activePlayer}`).textContent =  scores[activePlayer];
        /// 2. CHECK IF PLAYER'S SCORE IS >=20
        if(scores[activePlayer] >= 20){
            /// FINISH THE GAME
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.getElementById(`current--${activePlayer}`).classList.remove('player--active');
            diceEL.classList.add('hidden');
            ///SWITCH THE PLAYER
           
         }else{
             switchPlayer();
         }
        }
      })

/////////////  RESET FUNCTION
    btnNew.addEventListener('click', function(){
       playing = true ;
      
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
       document.querySelector('.player--0').classList.add('player--active');
       document.querySelector('.player--1').classList.remove('player--active');
       document.getElementById(`current--${activePlayer}`).textContent = 0;
       startGame();
       scores = [0,0] ;
       currentScore = 0 ;
    })

