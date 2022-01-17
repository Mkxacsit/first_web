
function gotoPage(hrefName){
  document.location.href = hrefName;
  if(localStorage.getItem('activeRole')==''){
    document.location.href ='./pages/authorization.html';
  }
}
function gotoPage1(hrefName){
  document.location.href = hrefName;
  if(localStorage.getItem('activeRole')==''){
    document.location.href ='/pages/authorization.html';
  }
}
/* menu */
let hiddenCheck=false;
let selectCheck=false;
function hideForm(){
  const form = document.querySelector('.main__form')//form
  
  if(!hiddenCheck){
   form.style.top = 760+'px';
     hiddenCheck=true;
   }else{
     form.style.top = 390+'px';
     hiddenCheck=false;
   }
   console.log("sadd");
}
function hideSelect(){
  const selectForm = document.querySelector('.main__navbar--hidden');
 
 if(!selectCheck){
   selectForm.style.left = -200 +'px';
  selectCheck=true;
  }else{
   selectForm.style.left = 0+'px';
    selectCheck=false;
  }
}