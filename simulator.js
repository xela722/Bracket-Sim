var teams = new Array(16)

function team(seed){
    this.seed = seed;
}

for(var i=0; i < teams.length; i++){
    teams[i] = new team(i+1)
}

function simGame(tm1, tm2){
    if(Math.round(Math.random())==0){
        return tm1.seed;
    }else{
        return tm2.seed;
    }
}
var winners = []

function bracketUpdate(id,id1,id2){
    document.getElementById(id).innerHTML = simGame(teams[document.getElementById(id1).innerHTML-1], teams[document.getElementById(id2).innerHTML-1])
}

function roundTwo(){
    bracketUpdate("W1", "seed1", "seed16");
    bracketUpdate("W2", "seed3", "seed14");
    bracketUpdate("W3", "seed5", "seed12");
    bracketUpdate("W4", "seed7", "seed10");
    bracketUpdate("W5", "seed8", "seed9");
    bracketUpdate("W6", "seed6", "seed11");
    bracketUpdate("W7", "seed4", "seed13");
    bracketUpdate("W8", "seed2", "seed15");
}

function roundThree(){
    bracketUpdate("W9","W1","W2");
    bracketUpdate("W10","W3","W4");
    bracketUpdate("W11","W5","W6");
    bracketUpdate("W12","W7","W8");
}

function roundFour(){
    bracketUpdate("W13","W9","W10");    
    bracketUpdate("W14","W11","W12");    
}

function final(){
    bracketUpdate("W15", "W13","W14")
    winners.push(document.getElementById('W15').innerHTML)
}

function fullSim(){
    roundTwo();
    roundThree();
    roundFour();
    final();
}

window.onload = function(){
    document.getElementById('sim').addEventListener('click', fullSim, false);
}