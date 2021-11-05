
var cartHim=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
var parent=document.getElementById("productAddincart")
var click=1
function showAddedProducts(){
    click++;
    cartHim.forEach(function(el,index){
        var productdiv=document.createElement("div")
        productdiv.setAttribute("id","prodiv")
   var productName=document.createElement("p")
   var productPrice=document.createElement("p")
   var productImage=document.createElement("img")
   var removeProduct=document.createElement("button")
   removeProduct.setAttribute("id","removeItembtn")
   var incrDecrDiv=document.createElement("div")
   incrDecrDiv.setAttribute("id","incredecrediv")
   var increasebtn=document.createElement("button")
   var deacrese=document.createElement("button")
   deacrese.innerHTML="-"
   increasebtn.innerHTML="+"
   var quantity=document.createElement("p")
   var variablePrice=document.createElement("p")
   variablePrice.innerHTML="$ "+click*(el.Price)
   quantity.innerHTML=1
   incrDecrDiv.append(deacrese,quantity,increasebtn)

   productName.innerHTML=el.Name
   productImage.src=el.Image
   productPrice.innerHTML="$ "+el.Price

productdiv.append(removeProduct,productImage,productName,productPrice,incrDecrDiv,variablePrice)
parent.append(productdiv)

    });
}
showAddedProducts()























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
