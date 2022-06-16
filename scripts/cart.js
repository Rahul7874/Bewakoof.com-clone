var cartData = JSON.parse(localStorage.getItem("cart")) || [];

let totalData = () =>{

  document.getElementById("subtotal").innerHTML=null;
  document.querySelector(".cp16").innerHTML=null;
var total = cartData.reduce(function (sum, elem, index, arr) {
  return sum + Number(elem.discountedPriceText);
}, 0);

console.log(total)
document.getElementById("subtotal").innerText=`₹ ${total}`
document.querySelector(".cp16").innerText=`₹ ${total}`
}
totalData();

let countdata =()=>{
    document.getElementById("cottt").innerHTML=null;
let length = cartData.length;
 console.log(length);

 document.getElementById("cottt").innerText=`My Bag ${length} items(s)`
}
countdata();





let showData = (cartData) => {
document.getElementById("cartappend").innerHTML=null;

cartData.map(function (elem,index) {

    let box = document.createElement("div");
    box.setAttribute("class","cartalldata")
     
    let box2 =document.createElement("div")
    box2.setAttribute("class","cartpricedata")
    
    let box3 =document.createElement("div")
    box3.setAttribute("class","cartpricedata1")

    let box4 =document.createElement("div")
    box4.setAttribute("class","cartpricedata2")

    let box5 =document.createElement("div")
    box5.setAttribute("class","cartpricedata3")

    let box6 =document.createElement("div")
    box6.setAttribute("class","cartpricedata4")

    let box7 =document.createElement("div")
    box7.setAttribute("class","cartpricedata5")

    let box8 =document.createElement("div")
    box8.setAttribute("class","cartpricedata6")

     let box9 =document.createElement("div")
     box9.setAttribute("class","btndivcart")

    
    let p1 =document.createElement("p")
    p1.innerText=elem.clrshade4;
    p1.setAttribute("class","p1tag")

    let p3 =document.createElement("p")
    p3.innerText=`₹${elem.discountedPriceText}`
    p3.setAttribute("class","p3p")

    let p4 =document.createElement("strike")
    p4.innerText=elem.actualPriceText;
    p4.setAttribute("class","p4p")

    let image =document.createElement("img");
    image.src = elem.productImgTag;
    image.setAttribute("class","appimg")

    let p5 =document.createElement("p")
    p5.innerText="YOU saved ₹700!";
    p5.setAttribute("class","greentext")

    let btn1 =document.createElement("button")
    btn1.innerText="Remove"
    btn1.setAttribute("class","removebtn")
    btn1.addEventListener("click", function () {
        removeItem(elem, index);
      });

    let btn2 =document.createElement("button")
    btn2.innerText="Move to Wishlist";
    btn2.setAttribute("class","movetobtn")
 
 
    let h3 =document.createElement("img")
    h3.src="https://i.im.ge/2022/06/16/r4MBGX.png";
    h3.setAttribute("class","h3bew")

       
 
    box.append(box2,box9);
    box2.append(box3, box4);
    box3.append(box5, box6, box7, box8)
    box4.append(image)
    box5.append(p1)
    box6.append(p3, p4)
    box7.append(p5)
    box8.append(h3)
    box9.append(btn1, btn2)
    document.querySelector("#cartappend").append(box);
 });

}
showData(cartData);

 let removeItem = (elem, index) => {
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    showData(cartData);
    countdata();
    totalData();
  }
 
 



