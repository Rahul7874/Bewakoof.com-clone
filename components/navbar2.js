let navbar = () =>{
    return`<div id="top_nav">
    <div id="ancors">
        <a>Offers</a>
        <a>Fanbook</a>
        <a>Download App</a>
        <a>TriBe Membership</a>
    </div>
    <div id="ancors_2">
        <a>Contact Us</a>
        <a>Track Order</a>
    </div>
</div>

<!-- bottom nav start -->
<div id="bot_nav">
    <div id="imgg">
        <img src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg" alt="">
    </div>

    <div id="mwa">
    <a class="aba" href="index.html"><span>MEN</span></a>
    <a class="aba" href="women.html"><span>WOMEN</span></a>
    <a class="aba" href="accessories.html"><span>MOBILE COVERS</span></a>
    </div>

    <div id="query">
        <i class="icon-search"></i>
        <input type="text" id="search" placeholder="Search by product, category or collection"/>
    </div>

    <div id="login_div">
        
        <div class="login">
            <span>Login</span>
        </div>
       <div>
        <a href="cart.html"><img class="dil_i" src="https://i.ibb.co/r5wJ842/Screenshot-32.png" alt=""></a>>
       </div>
       <div id="count"></div>
        
    </div>`
}

export default navbar;