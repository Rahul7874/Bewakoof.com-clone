import navbar from "../components/navbar2.js";
document.getElementById("navbar").innerHTML=navbar();

const fetchFun = async () => {
    try{
        let res = await fetch("http://localhost:4000/Tshirts");
        let data = await res.json();
        console.log(data)
        

    }catch(err){
        console.log(err);
    }
 
}
fetchFun();

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();


