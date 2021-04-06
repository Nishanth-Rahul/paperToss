class DustBin{     
    constructor(x,y,width,height){
       
      boxleftSprite=createSprite(x,y,width,height);
      boxleftSprite.shapeColor="blue";
      
      boxleftBody=Bodies.rectangle(x,y,width,height, {isStatic:true});
      World.add(world, boxleftBody); 
   
      
      boxbaseSprite=createSprite(x,y,width,height);
      boxbaseSprite.shapeColor="blue";
   
      boxbaseBody=Bodies.rectangle(x,y,width,height,{isStatic:true});
      World.add(world, boxbaseBody);
      
      boxrightSprite=createSprite(x,y,width,height);
      boxrightSprite.shapeColor="blue";
   
      boxrightBody=Bodies.rectangle(x,y,width,height,{isStatic:true});
      World.add(world, boxrightBody);


      bin = loadImage("dustbin.png");

      boxbaseBody.addImage(bin);
    }
}