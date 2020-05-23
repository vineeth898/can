var path=[];
var buton;
var database;
function setup(){
    createCanvas(displayWidth,displayHeight-50);
    database=firebase.database();
    buton=new button();
    
}
function draw(){
    background("black");
    var pa=database.ref('array');
    pa.on("value",(data)=>{
        path=data.val();
    });
  if(path!=0)
    for(var x=0;x<path.length;x++){
        fill("red");
        stroke("red");
        ellipse(path[x][0],path[x][1],20,20);
        ellipse(path[x][0]-1,path[x][1]+1,20,20);   
        ellipse(path[x][0]+1,path[x][1]-1,10,10);
    }
   buton.dis();
   
}
function mouseDragged(){
var Paths=[mouseX,mouseY];
path.push(Paths);
database.ref('/').set({
    'array':path
});
}