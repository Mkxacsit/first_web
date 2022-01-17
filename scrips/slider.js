let offset=0;
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-prev').addEventListener('click',function(){
 offset+=getStep();
 if(offset>0){offset=-100}
 sliderLine.style.left= offset +'%';
 console.log(window.screen.width);
});

document.querySelector('.slider-next').addEventListener('click',function(){
  offset-=getStep();
 if(offset<-100){offset=0}
  sliderLine.style.left= offset +'%';
 });

 function getStep(){
   if(window.screen.width>1200){
     return 33.2;
   }
   if(window.screen.width<1200 && window.screen.width>800){
    return 50;
  }
  if(window.screen.width<800){
    return 100;
  }
 }


// document.querySelector('.main__button--disable').addEventListener('click',function(){
//   offset-=getStep();
//  if(offset<-100){offset=0}
//   sliderLine.style.left= offset +'%';
//  });