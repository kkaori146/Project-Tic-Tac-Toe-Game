var game=[];
var table=[];
var player=0;
var verify;
var playing=true;
var level=1;
var moveComputer=1;
var starter=1;

function computerPlay() {
    if(playing) {
        var row, column;
        if(level==1){
            do {
                row=Math.round(Math.random()*2);
                column=Math.round(Math.random()*2);
            }while(game[row][column]!="");
            game[row][column]="O";
        }

        verify=verifyVictory();
        if(verify!=""){
            playing=false;
            alert(verify+" is the WINNER");
            
        }
        updateTable();
        player=0;
    }
}

function verifyVictory() {
    var row, column;
    //ROW
    for(row=0; row<3; row++) {
        if((game[row][0]==game[row][1])&&(game[row][1]==game[row][2])){
            return game[row][0];
            }
        }
    //COLUMN
        for(column=0; column<3; column++) {
            if((game[0][column]==game[1][column])&&(game[1][column]==game[2][column])){
                return game[0][column];   
            }        
        } 
    //DIAGONAL
        if((game[0][0]==game[1][1])&&(game[1][1]==game[2][2])){
            return game[0][0]; 
        }  
        if((game[0][2]==game[1][1])&&(game[1][1]==game[2][0])){
            return game[0][2]; 
        }
        return "";
    }

function play(p) {
    if((playing)&&(player==0)){
        switch(p){
            case 1:
                if(game[0][0]=="") {
                    game[0][0]="X";
                    player=1;
                }
            break;
            case 2:
                if(game[0][1]=="") {
                    game[0][1]="X";
                    player=1;
                }
            break;
            case 3:
                if(game[0][2]=="") {
                    game[0][2]="X";
                    player=1;
                }
            break;
            case 4:
                if(game[1][0]=="") {
                    game[1][0]="X";
                    player=1;
                }
            break;
            case 5:
                if(game[1][1]=="") {
                    game[1][1]="X";
                    player=1;
                }
            break;
            case 6:
                if(game[1][2]=="") {
                    game[1][2]="X";
                    player=1;
                }
            break;
            case 7:
                if(game[2][0]=="") {
                    game[2][0]="X";
                    player=1;
                }
            break;
            case 8:
                if(game[2][1]=="") {
                    game[2][1]="X";
                    player=1;
                }
            break;
            default:
                if(game[2][2]=="") {
                    game[2][2]="X";
                    player=1;
                }
            break;
        }
        if(player==1){
            updateTable();
            verify=verifyVictory();
            if(verify!=""){
                alert(verify+" is the WINNER");
                playing=false;
            }
            computerPlay();
        }
    }
}

function updateTable(){
    for(var row=0; row<3; row++){
        for(var column=0; column<3; column++){
            if(game[row][column]=="X"){
                table[row][column].innerHTML="X";
                table[row][column].style.cursor="default";
            } else if(game[row][column]=="O") {
                table[row][column].innerHTML="O";
                table[row][column].style.cursor="default";
            } else {
                table[row][column].innerHTML="";
                table[row][column].style.cursor="pointer";
            }
        }
    }
}

function start() {
    playing=true;
    moveComputer=1;
    game=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    table=[
        [document.getElementById("position1"),document.getElementById("position2"), document.getElementById("position3")],
        [document.getElementById("position4"),document.getElementById("position5"), document.getElementById("position6")],
        [document.getElementById("position7"),document.getElementById("position8"), document.getElementById("position9")]
    ];
    
    updateTable();
    if(starter==1){
        starter=0;
        player=starter;
        document.getElementById("whoStart").innerHTML="Who starts: Player";

    } else {
        starter=1;
        player=starter;
        document.getElementById("whoStart").innerHTML="Who starts: Computer"
        computerPlay();
    }
}

window.addEventListener("load", start);