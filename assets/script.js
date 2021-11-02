function play(p) {
    if((jogando)&&(quemJoga==0)){
        switch(p){
            case 1:
                if(jogo[0][0]=="") {
                    jogo[0][0]="X";
                    quemJoga=1;
                }
            break;
        }
    }
}

function inicia() {
    jogando=true;
    jogadaCpu=1;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}

window.addEventListener("load, inicia")