


function init()
{
   // console.log("In Init");
    var canvas =document.getElementById("mycanvas") ;
    W=canvas.width=598;
    H=canvas.height=491;
    pen= canvas.getContext('2d')
    gameover=false;
    cs=50;

   snake = 
    {
        init_len:5,
        color:"white",
        cells:[],
        direction:"right",

        createSnake:function()
        {
            for(var i=this.init_len;i>0;i--)
            {
                this.cells.push({x:i,y:0});
            }
        },

        drawSnake:function()
        {
            for(var i=0;i<this.cells.length;i++)
            {
                pen.fillStyle=this.color;
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-1,cs-1)
            }
            
        },
        updateSnake:function()
        {
            this.cells.pop();
            var headX=this.cells[0].x;
            var headY=this.cells[0].y;
            var nextX,nextY;
            
            if(this.direction=="right"){
                nextX=headX+1;
                nextY=headY;
            }
            else if(this.direction=="left"){
                nextX=headX-1;
                nextY=headY;
            }
            else if(this.direction=="up"){
                nextX=headX;
                nextY=headY+1;
            }
            else{
                nextX=headX;
                nextY=headY-1;
            }

            this.cells.unshift({x:nextX,y:nextY});



        }

        
    
       
    };
    snake.createSnake();

    function keypressed(e){
        if(e.key="ArrowRight"){
            snake.direction="right";
        }
        else if(e.key="ArrowLeft"){
            snake.direction="left";
        }
        else if(e.key="ArrowUp"){
            snake.direction="up";
        }
        else{
            snake.direction="down";
        }
        console.log(snake.direction);

        

    }

    document.addEventListener('keydown',keypressed)
    
    

};

    //rect={
  //      x:100,
    //    y:100,
      //  w:50,
        //h:50,
        //speed:50,
    //} 


function draw(){
    pen.clearRect(0,0,W,H);
    //console.log("In Draw");)
    snake.drawSnake();
    //for(var i=0;i<this.cells.length;i++){
      //  pen.fillStyle="white";
        //pen.fillRect(rect.x,rect.y,rect.w,rect.h);


}
function update(){
    //console.log("In uodate");
   //rect.x +=rect.speed;
   //if(rect.x>W-rect.w || rect.x<0)
   //{
    //rect.speed *=-1;
    snake.updateSnake();
    
    


  }

   

function gameloop(){
    //console.log("In game loop");
    //if(gameover==true){
      //  clearInterval(f);}
    //}
   draw();
   update() 
}
init();
var f=setInterval(gameloop,100);
//update();