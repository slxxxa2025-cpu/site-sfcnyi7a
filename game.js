const c=document.getElementById('game');
const ctx=c.getContext('2d');
let x=50,y=220,vy=0,onGround=true;

document.addEventListener('keydown',e=>{
 if(e.code==='Space'&&onGround){
  vy=-12; onGround=false; playJump();
 }
});

function loop(){
 ctx.clearRect(0,0,c.width,c.height);
 ctx.fillStyle='green';
 ctx.fillRect(0,260,800,40);

 vy+=0.6; y+=vy;
 if(y>220){y=220;vy=0;onGround=true;}

 ctx.fillStyle='red';
 ctx.fillRect(x,y,30,40);

 requestAnimationFrame(loop);
}
loop();
