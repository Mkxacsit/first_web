let role = localStorage.getItem('activeRole');

function changePage(){
    if(role=='admin'){
      const mainSection = document.querySelector(".main__order");
      mainSection.style.display="none";  
    }
}
// window.onload =()=>{
//     changePage();
// }