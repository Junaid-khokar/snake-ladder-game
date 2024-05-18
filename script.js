let display = document.getElementById('show');
let Box = document.getElementById('box');
let button = document.getElementById('myBtn');
let pera = document.getElementById('pera');
let dice = new Audio('music/Dice.mp3');
let steps = new Audio('music/steps.mp3');
let snake = new Audio('music/snake.mp3');
let laddder = new Audio('music/ladder.mp3');
let win = new Audio('music/win.mp3');
let a = 1 ,b=0;
let playerArr = [{x:0,y:10},{x:0,y:10}] ;
let num1 = 0 ;
let num2 = 0 ;
let c1 = 0 ;
let c2 = 0 ;
let turn = 1 ,random ;

dice.playbackRate = 0.6 ;
function playing(){
    turn++;
    button.disabled = true ;

    random = Math.floor(Math.random()*6)+1 ;
    console.log(random);
    dice.play();
    var i = setInterval(function()
    {
        display.innerText = "You got :- "+a ;
    a++ ;
    if(a==6)
    {
        a=1;
        b++
    }
    else if(b==6)
    {
        display.innerText = "You got :- "+random ;
        console.log("intervel cleard");
        a=1;
        b=0;
        clearInterval(i);
    }
    } ,30);
        setTimeout(function(){ 
            let count = 1 ;
            let i = setInterval(() => {
                if(count==random)
                    {
                        clearInterval(i);
                    }        
                    
                    steps.play();
                    count = playElement(count);                    
                    console.log(playerArr[0]);
                    console.log(playerArr[1]);
                },500);               
                setTimeout(ladder,(random*500)+200);
        },1000);
};

function ladder()
{
        if((playerArr[0].x==1 && playerArr[0].y==10)||(playerArr[1].x==1 && playerArr[1].y==10))
            {
               step(38);
        }else if((playerArr[0].x==4 && playerArr[0].y==10)||(playerArr[1].x==4 && playerArr[1].y==10))
            {
               step(11);
        }else if((playerArr[0].x==8 && playerArr[0].y==10)||(playerArr[1].x==8 && playerArr[1].y==10))
            {
                step(23);
        }else if((playerArr[0].x==1 && playerArr[0].y==8)||(playerArr[1].x==1 && playerArr[1].y==8))
            {
                step(22);
        }else if((playerArr[0].x==8 && playerArr[0].y==8)||(playerArr[1].x==8 && playerArr[1].y==8))
            {
                step(49);
        }else if((playerArr[0].x==10 && playerArr[0].y==6)||(playerArr[1].x==10 && playerArr[1].y==6))
            {
                step(18);
        }else if((playerArr[0].x==10 && playerArr[0].y==3)||(playerArr[1].x==10 && playerArr[1].y==3))
            {
                step(22);
        }else if((playerArr[0].x==1 && playerArr[0].y==3)||(playerArr[1].x==1 && playerArr[1].y==3))
            {
                step(20);
        }
        snakeBite();
}

function snakeBite()
{
    if( (playerArr[0].x==9 && playerArr[0].y==7)||(playerArr[1].x==9 && playerArr[1].y==7))
        {
            backSteps(23);
        }
    else if((playerArr[0].x==5 && playerArr[0].y==7)||(playerArr[1].x==5 && playerArr[1].y==7))
        {
            backSteps(31);        }
    else if((playerArr[0].x==8 && playerArr[0].y==6)||(playerArr[1].x==8 && playerArr[1].y==6))
        {
            backSteps(23);
        }
    else if((playerArr[0].x==2 && playerArr[0].y==4)||(playerArr[1].x==2 && playerArr[1].y==4))
        {
            backSteps(45);
        }   
    else if((playerArr[0].x==8 && playerArr[0].y==2)||(playerArr[1].x==8 && playerArr[1].y==2))
        {
            backSteps(65);
        }
    else if((playerArr[0].x==6 && playerArr[0].y==1)||(playerArr[1].x==6 && playerArr[1].y==1))
        {
           backSteps(40);
        }
    else if((playerArr[0].x==4 && playerArr[0].y==1)||(playerArr[1].x==4 && playerArr[1].y==1))
        {
            backSteps(20);
        } 

        if((playerArr[0].x==1 && playerArr[0].y==1 ))
            {

                button.disabled = true ;
            }
        else if((playerArr[1].x==1 && playerArr[1].y==1 ))
            {
                button.disabled = true ;
            }
        else if (turn%2!=0)
        {
            button.disabled = false ;
        }
        else if (turn%2==0)
            {
                setTimeout(playing , 2000);
            }

        console.log("turn",turn);
    }
            
function playElement(count)
            {
                
    if(turn%2==0)
        {
            pera.innerText = "It's COMPUTER's turn";
        }
        else{
            pera.innerText = "It's PLAYER'S turn";
        } 

     if(playerArr[0].x==1 && playerArr[0].y==1)
        {
            pera.innerText = "PLAYER IS THE WINNER!!";
            button.disabled = true ;
            win.play();
            console.log("in0");
            count = random ;
            return count ;
        }
    else if(playerArr[1].x==1 && playerArr[1].y==1){
        pera.innerText = "COMPUTER IS THE WINNER!!";
        button.disabled = true ;
        console.log("in1");
        win.play();
        count = random ;
        return count;
    }
    
    if(turn%2==0)
        {
            num1++;
        }
        else{
            num2++;
        }   
        
        
    if((num1-1)%10==0 && num1!=1)
        {
            console.log("enterd");
            if(turn%2==0)
                {
                    c1++;
                    console.log("c1",c1);
                    playerArr[0].y-- ;
                }
        }

    if((num2-1)%10==0 && num2!=1)
        {
            console.log("enterd2");
            if(turn%2!=0)
                {
                    c2++;
                    console.log("c2",c2);
                    playerArr[1].y--;
                }
        }
    
        if((num1-1)%10!=0 || num1==1) {
            if(c1%2!=0 ){
                if(turn%2==0)
                    {
                        playerArr[0].x--;
                    }
            }
            else
            {
                if(turn%2==0)
                    {
                        playerArr[0].x++ ;
                    }
            }
        }

    if((num2-1)%10!=0 || num2==1) {
        if(c2%2!=0){
            if(turn%2!=0)
                {
                 
                    playerArr[1].x--;
                }
        }
        else
        {
            if(turn%2!=0)
                {
                    playerArr[1].x++;
                }
        }
    }
    
            Box.innerHTML = "" ;
            var player1 = document.createElement('div');
            player1.classList.add('player1');
            Box.appendChild(player1);
            player1.style.gridRow = playerArr[0].y ;
            player1.style.gridColumn = playerArr[0].x;
            console.log("num1",num1);
            console.log("num2",num2);
        
        
                    // Box.innerHTML = "" ;
                  if(playerArr[1].x!=0) 
                    { 
                        var player2 = document.createElement('div');
                    player2.classList.add('player2');
                    Box.appendChild(player2);
                    player2.style.gridRow = playerArr[1].y ;
                    player2.style.gridColumn = playerArr[1].x;
                    }

                    count++;
        
                    if(playerArr[0].x==playerArr[1].x && playerArr[0].y==playerArr[1].y && turn>1)
                        {
                            player1.classList.add('collaps1');
                        }
                        else
                        {
                            player1.classList.remove('collaps1');
                        }
                    

return count ;}

function step(steps)
{
    laddder.play();
    let count = 1 ;
                let L = setInterval(function()
            {
                count = playElement(count);
                if(count==steps)
                    {
                        clearInterval(L);
                    }
            },30);

            console.log("ladder running");
}

function backSteps(steps)
{
    snake.play();
    let count = 1 ;
    let L = setInterval(function()
{
    count = biteElement(count);
    if(count==steps)
        {
            clearInterval(L);
        }
},30);

console.log("snake runing");
}

function biteElement(count)
{   
    if(turn%2==0)
        {
            console.log("enterd");
        if((num1-1)%10==0 && num1!=1 )
                {
                    c1--;
                    console.log("c1",c1);
                    playerArr[0].y++ ;
                }
        }

    if(turn%2!=0)
        {
            console.log("enterd");
        if((num2-1)%10==0 && num2!=1)
            {
                c2--;
                console.log("c1",c2);
                playerArr[1].y++;
            }
        }
    
    if((num1-1)%10!=0 || num1==1)
     {
        if(c1%2!=0 ){
            if(turn%2==0)
                {
                    playerArr[0].x++;
                }
        }
        else
        {
            if(turn%2==0)
                {
                    playerArr[0].x-- ;
                }
        }
     }

    if((num2-1)%10!=0 || num2==1) {
        if(c2%2!=0){
            if(turn%2!=0)
                {
                    playerArr[1].x++;
                }
        }
        else
        {
            if(turn%2!=0)
                {
                    playerArr[1].x--;
                }
        }
    }
    
            Box.innerHTML = "" ;
            let player1 = document.createElement('div');
            player1.classList.add('player1');
            Box.appendChild(player1);
            player1.style.gridRow = playerArr[0].y ;
            player1.style.gridColumn = playerArr[0].x;
            console.log(num1);
        
        
                    // Box.innerHTML = "" ;
                    if(playerArr[1].x!=0) 
                        { let player2 = document.createElement('div');
                        player2.classList.add('player2');
                        Box.appendChild(player2);
                        player2.style.gridRow = playerArr[1].y ;
                        player2.style.gridColumn = playerArr[1].x;
                        console.log(num1);}

                        if(turn%2==0)
                            {
                                num1--;
                            }
                            else{
                                num2--
                            }

                        count++;

                        if(playerArr[0].x==playerArr[1].x && playerArr[0].y==playerArr[1].y && turn>1)
                            {
                                player1.classList.add('collaps1');
                            }
                            else{
                                player1.classList.remove('collaps1'); 
                            }

return count ;}

function reset()
{
    location.reload();
}

console.log(playerArr);