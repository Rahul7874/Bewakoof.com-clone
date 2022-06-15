import navbar  from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

var cartData = JSON.parse(localStorage.getItem("cart")) || [];
let countdata =()=>{
let length = cartData.length;
 console.log(length);

 document.getElementById("count").innerText=`${length}`
}
countdata();

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();