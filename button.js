class button{
constructor(){
    this.button=createButton('reset');
}
dis(){
    this.button.position(displayWidth-50,10);
    this.button.mousePressed(()=>{
        database.ref('/').set({
            'array':0
        });
        path=[];
    });
}
}