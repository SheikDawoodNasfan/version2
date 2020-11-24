function mobfunction(){
  var z= document.getElementById("mobnav2");
  if(z.className === "mobnav1"){
    z.className += " responsive";
  }else{
    z.className = "mobnav1";
  }
}

let cart = document.querySelectorAll('.addcart');


for(let z=0; z < cart.length; z++){
  cart[z].addEventListener('click', () => {
    cartNumber();
  })
}