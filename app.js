const field=document.querySelectorAll('.bodyContainer' )
let gameOn= document.getElementById('gameOn')
let  hull = document.getElementById('hull')
let firepower= document.getElementById('firepower')
 let accuracy= document.getElementById('accuracy')
let hull2= document.getElementById("hull2")
let firepower2=document.getElementById('firepower2')
let accuracy2=document.getElementById('accuracy2')
 let display=document.getElementById('display')
 let allStats=document.getElementsByClassName('allStats')
 let playerstats=document.getElementsByClassName('playerstats')
 let enemyStats= document.getElementsByClassName('ennemyStats')
gameOn.onclick

const EnnemyShip= new playerstats(6,4,1) 
    
function startBattle(){
    display.innerHTML='Enemy first move HERE';
    for(let i=0; i<allStats.length; i++){
        allStats[i].visibility='show';
    }

 }

function attack(){
     accuracy=Math.floor(Math.random()*8);
     if(accuracy<=7){
    const damage= Math.floor(Math.random()*1)*.7; 
   hull2-=damage;
    display.innerHTML= `Ennemy Hit +${damage}+<span${hull2}></span>`

    }else {
   display.innerHTML='you missed';
    }
   if (hull2==0){
       display.innerHTML= '<br> you won!!!';
       moveUss.styles.visibility ='hidden';

   }


function damagEnnemy(alienInvaders,firepower){
    
(Math.random()<alienShip[0].accuraccy)
console.log('you have been hit')
alienInvaders.hull -=firepower
console.log(this.damageAlien);  

}

function damagePlayer (player, firepower){
    player.hull -=  firepower   
    console.log(this.damageplayer)    

}


// //methods are also functions. and some methods belong to a class like(arr class, strings, etc...


class alienInvaders { 
    constructor(hull,firepower,accuracy){
       this.hull= hull
       this.firepower= firepower
       this. accuracy= accuracy
    }
         
    //when used inside functions, parameters are considered as arguments
                // .hull may mean that we want to try  to access that property( hull) of the player
       //we have the player ship,  //  we are passin the playership(var) as an arg . method here damageplayer 




  class player{
      constructor(hull,firepower, accuracy){
      this.hull= hull
       this.firepower= firepower
       this. accuracy= accuracy
   
      }
  } 

    function damageAlien(alienInvaders,firepower){
                                                      // instance of player class
      
    }
    function updateships(){                    // here hull is an elt, innerhtml is a property of that obj
    hull.innerHTML = alienInvaders.hull 
    firepower.innerHTML=alienInvaders.firepower
    accuracy.innerHTML=alienInvaders.accuracy 
    hull.innerHTML= player.hull
    firepower.innerHTML=  player.firepower
    accuracy.innerHTML= player.accuraccy
    }

 

    
    playerShip.damageAlien(alienShip,playerShip.firepower)
    alienShip.damageplayer(playerShip, alienShip.firepower)             
    console.log()
   
}

  
let playerShip=new player(20,5,.7)



