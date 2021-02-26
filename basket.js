"use strict";
const BS = 50;
const FruCol = ["red", "darkblue", "yellow", "darkorange", "green"]

function pxc(B, ic=true){
    let px = B*BS;

    if (ic) {
        px += 'px';
    }
    return px;
}
function vis(el){
    el.classList.add('vis');
}
function invis(el){
    el.classList.remove('vis');
}

const board = {
    be : document.getElementById('board'),

    resize : function(){
        const h = window.innerHeight;
        const w = window.innerWidth;

        const mpw = w - pxc(9, false);
        const mph = h - pxc(2, false);

        this.gW = Math.floor(mpw/BS);
        this.gH = Math.floor(mph/BS);

        this.be.style.width = pxc(this.gW);
        this.be.style.height = pxc(this.gH);
        this.be.style.borderWidth = pxc(0.75);
    },

    add : function(){

    },

    place : function(){

    },

    remove : function(){
        
    }
}

function createBasket(){
        function createBasketElement(){
            bkt = document.createElement('div');
            bkt.style.width = pxc(1, true);
            bkt.style.height = pxc(1, true);
            bkt.style.backgroundColor = 'brown';
            bkt.style.borderBottomLeftRadius = "50%";
            bkt.style.borderBottomRightRadius = "50%";
            return bkt;
            }
            return {
                bkt : createBasketElement,

            }   
    }

const game = {
    board: board,
    food: null,
    basket: null,
    paused: null,
    
    start : function(){
        invis(document.getElementById('game-start'));
        invis(document.getElementById('navig'));
        this.reset();
    },
    
    reset : function(){
        board.resize();
        createBasket();
    },
    
    pacer : function(){
    
    },
    gameOver : function(){
    
    }
    }