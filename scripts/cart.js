var cartData = JSON.parse(localStorage.getItem("cart")) || [];
let countdata =()=>{
let length = cartData.length;
 console.log(length);

 document.getElementById("cottt").innerText=`My Bag ${length} items(s)`
}
countdata();

cartData.map(function (elem) {
    let box = document.createElement("div");
     box.setAttribute("class","cartalldata")
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
     
     let p5 =document.createElement("p")
     p5.innerText=`${elem.loyaltyPriceBox} For TriBe Members`
     p5.setAttribute("class","p5p")   
 
    box.append(image, box2);
    box2.append(h3, p1, box3,p5)
    box3.append(p3, p4)
    document.querySelector("#cartappend").append(box);
 });
 
 



