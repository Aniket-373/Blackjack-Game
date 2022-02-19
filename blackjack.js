let player={
    name: "Aniket",
    chips: 150
}

let firstcard =randomcard()
let secondcard =randomcard()
let cards=[firstcard,secondcard]
let sum = firstcard + secondcard
let blackjack= false
let isingame= true
let message=""

let playerel= document.getElementById("player-el")
playerel.textContent= player.name+": $"+ player.chips

let messageel =document.getElementById("messageel")
console.log(messageel)
let sumel =document.getElementById("sumel")
console.log(sumel)
let cardsel =document.getElementById("cardsel")
console.log(cardsel)

function randomcard(){
    let randomcard=Math.floor(Math.random()*13) +1
    if(randomcard===1){
        return 11
    }
    else if(randomcard>10){
        return 10
     }
     else{
         return randomcard
     }
}
console.log(randomcard())

function startgame(){
    rendergame()
}
function rendergame(){
    cardsel.textContent = "Cards: "
    for(i=0; i < cards.length;i++){
        cardsel.textContent += cards[i] +" "
    }
    sumel.textContent="Sum: "+ sum
    if(sum<=20){
        message=("Want to draw new card? 🤔")
    }
    else if(sum===21){
        message=("You've got a Blackjack! 🥳")
        blackjack=true
        window.alert(message,"You won...🤩!")
        alert("Wanna play again!")
}
    
    else{
        message=("You are out! Better luck next time! 😥")
        isingame=false
        
    }
    messageel.textContent = message
}

function newcard(){
    if(isingame=== true && blackjack === false){
    console.log("Drawing new card")
    let card= randomcard()
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
    }
}
