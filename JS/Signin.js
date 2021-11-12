var dataBase=JSON.parse(localStorage.getItem("userHimalaya"))
var bt=document.getElementById("loginbt")
if(dataBase===null){
bt.onclick=function(){
    window.alert("Sign up First")
}
}else{

  function login(event){
    event.preventDefault()
    
    var loginMail=document.getElementById("loginmail").value
    var loginPass=document.getElementById("loginpassword").value
  
   
    var count=0;
    dataBase.forEach(function(el,index){
      if(loginMail===el.uMail && loginPass===el.uPass){
        count++;
        // alert("Logged In Successfully")
      }
      else if(loginMail===el.uMail && loginPass!==el.uPass){
        // alert("Incorrent User Credentional")
        count=0;
      }
    })
    if (count > 0) { window.alert("logged in successfully") }
    else if (count == 0) { window.alert("This email is not registered with us.") }

    loginPass=""
    loginMail=""
    count=0;
   }
  }
 
  // search

var closeSearch=document.getElementById("searchClose")
closeSearch.onmouseover=function(){
  clickonSearchOption.style.visibility="hidden"
}
var cLICKSEARCH=document.getElementById("cLICKSEARCH")
var clickonSearchOption=document.getElementById("clickonSearchOption")
cLICKSEARCH.onclick=function(){
  clickonSearchOption.style.visibility="visible"
}


// hovering on shop

var shop=document.getElementById("hoverover")
var upline=document.getElementById("upline")
var s=document.getElementById("shophover")
var navbar=document.getElementById("NavBar")
var shopOnHoverDiv=document.getElementById("shopOnHoverDiv")
shop.onmouseover=function(){
    shopOnHoverDiv.style.visibility="visible"
    upline.style.visibility="visible"
}
shopOnHoverDiv.onmouseleave=function(){
    shopOnHoverDiv.style.visibility="hidden"
    upline.style.visibility="hidden"
}

  // signin&up

  var signIn=document.getElementById("signIn")
  signIn.onclick=function(){
    window.location.href="../HTML/Signin.html"
  }

  var a=0;
  var clickedOnuser=document.getElementById("clickedOnuser")
  var clickUser=document.getElementById("clickUser")
  clickUser.onclick=function(){
      a++;
      if(a%2!==0){
        clickedOnuser.style.visibility="visible"
      }else{
        clickedOnuser.style.visibility="hidden"
      }
     
  }

  document.querySelector(".home").onclick=function(){
    window.location.href="../Index.html"
  }

  
  // smallCart
  var showcartItemsNumber=document.getElementById("showItemNumber")
  var smallcartHim=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
  
var smallCartParent=document.getElementById("ProductsDivClickedOnCart")
function showp(){
  smallcartHim.forEach(function(el,index){
  var sdiv=document.createElement("div")
  sdiv.setAttribute("id","sdiv")
showcartItemsNumber.innerHTML=smallcartHim.length
var pimg=document.createElement("img")
var pname=document.createElement("p")
pname.setAttribute("class","ScartName")
var pprice=document.createElement("p")
pimg.src=el.Image
pprice.innerHTML="$"+el.Price
pname.innerHTML=el.Name
sdiv.append(pimg,pname,pprice)
smallCartParent.append(sdiv)
});


}showp()
  // smallCart
var cm=0;
var smallcartShow=document.getElementById("clickonCart")
 var clickedonCart=document.getElementById("clickToShowCart")
 clickedonCart.onclick=function(){
  cm++;
  if(cm%2!==0){
    smallcartShow.style.visibility="visible"
  }else{
    smallcartShow.style.visibility="hidden"
  }
 }
 document.querySelector(".Scheckout").onclick=function(){
  window.location.href="../HTML/Information.html"
}
document.querySelector(".viewCartpage").onclick=function(){
  window.location.href="../HTML/Cart.html"
}
document.querySelector("#hoverforproductpageToshow").onclick=function(){
  window.location.href="../HTML/Products.html"
}
document.querySelector(".viewCartpage").onclick=function(){
  window.location.href="../HTML/Cart.html"
}
document.querySelector(".regopt").onclick=function(){
  window.location.href="../HTML/Signup.html"
}
document.querySelector(".checkoutopt").onclick=function(){
  window.location.href="../HTML/Information.html"
}