import navbar from "../components/navbar2.js";
document.getElementById("navbar").innerHTML=navbar();

var cartData = JSON.parse(localStorage.getItem("cart")) || [];
let countdata =()=>{
    document.getElementById("count").innerHTML=null;
let length = cartData.length;
 console.log(length);

 document.getElementById("count").innerText=`${length}`
}
countdata();


const fetchFun = async () => {
    try{
        let res = await fetch("https://bewakoof-com-server.herokuapp.com/api/Tshirt");
        let data = await res.json();
        console.log(data)
        appendFunction(data);

    }catch(err){
        console.log(err);
    }
 
 }
 fetchFun();

 

  let appendFunction = (data)=>{
   data.forEach(function (elem) {
   let box = document.createElement("div");

   let image =document.createElement("img");
   image.src = elem.productImgTag;
   image.setAttribute("class","appimg")

   let box2 =document.createElement("div");
   box2.setAttribute("id","boxdiv")

   let h3 =document.createElement("h3")
   h3.innerText="Bewakoof";
   h3.setAttribute("class","h3bew")

   let p1 =document.createElement("p")
   p1.innerText=elem.clrshade4;
   p1.setAttribute("class","p1tag")
   
   let box3 = document.createElement("div");
   box3.setAttribute("id","box3div")
   
   let p3 =document.createElement("p")
   p3.innerText=`₹${elem.discountedPriceText}`
   p3.setAttribute("class","p3p")

   let p4 =document.createElement("strike")
   p4.innerText=elem.actualPriceText;
   p4.setAttribute("class","p4p")
   
   let cart=document.createElement("button");
       cart.innerText="Add to Cart"
       cart.addEventListener("click",function () {
        addToCart(elem);
      });
       cart.setAttribute("id","btn1")

    let p5 =document.createElement("p")
    p5.innerText=`${elem.loyaltyPriceBox} For TriBe Members`
    p5.setAttribute("class","p5p")   

   box.append(image, box2);
   box2.append(h3, p1, box3,p5)
   box3.append(p3, p4, cart)
   document.querySelector("#sidemain2").append(box);
});
};

let addToCart = (elem) => {
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("Added To Cart");
    countdata();
    
  }

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();


