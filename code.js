function play() {
    //used for debug
    console.log("You pressed play")
    //get integer between 1 and 6 and assign
    let die1 = Math.ceil(Math.random()*6)
    let die2 = Math.ceil(Math.random()*6)
    //adds the dice together and figures out the sum
    let sum = die1+die2
    //grabs the div I called table in html file
    let table = document.getElementById("table")
    table.innerHTML = ""
    //takes div and appends the messages the messages to the inner html
    table.innerHTML +=("The roll of die 1 was " + die1 + "<br/>")
    table.innerHTML += ("The roll of die 2 was " + die2 + "<br/>")
    table.innerHTML += ("The total is " + sum + "<br/>")
    if(sum == 7 || sum == 11){
        table.innerHTML +=("CRAPS - You Lose <br/>")
    }
    else if(die1==die2&&die1%2==0){
        table.innerHTML +=("Doubles - You Win <br/>")
    }
    
}
