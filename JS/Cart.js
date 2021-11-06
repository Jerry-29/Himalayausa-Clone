
var cartHim=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
var parent=document.getElementById("productAddincart")
function showAddedProducts(){
    parent.innerHTML=""
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
    increasebtn.setAttribute("class","increasebtnClass")
   increasebtn.addEventListener("click",function(){
    showQt(index)
   })
   var deacrese=document.createElement("button")
   deacrese.setAttribute("class","decreaseBtClass")
   deacrese.addEventListener("click",function(){
    decreaseQuant(index)
   })
   deacrese.innerHTML="-"
   increasebtn.innerHTML="+"
   var quantity=document.createElement("p")
   quantity.setAttribute("class","qunatityClass")
   var variablePrice=document.createElement("p")
   variablePrice.innerHTML="$ "+(el.quant*(el.Price)).toFixed(2)
   quantity.innerHTML=el.quant
   incrDecrDiv.append(deacrese,quantity,increasebtn)

   removeProduct.addEventListener("click",function(){
    delItemsFromCart(index)
   })

   productName.innerHTML=el.Name
   productImage.src=el.Image
   productPrice.innerHTML="$ "+el.Price
productdiv.append(removeProduct,productImage,productName,productPrice,incrDecrDiv,variablePrice)
parent.append(productdiv)

    });
}
showAddedProducts()


// delItemsFromCart

function delItemsFromCart(index){
cartHim.splice(index,1)
localStorage.setItem("HimalayaUsStorage",JSON.stringify(cartHim))
showAddedProducts(cartHim)
}

// continueshopping
var continueshopping=document.getElementById("continueshopping")
continueshopping.onclick=function(){
  window.location.href="../index.html"
}

// clearCart
var clearAllbtn=document.getElementById("clearAllbtn")
clearAllbtn.onclick=function(){
 cartHim=[]
 localStorage.setItem("HimalayaUsStorage",JSON.stringify(cartHim))
 window.location.href="../HTML/Cart.html"
}

//updateCart
var updateLogobtn=document.getElementById("updateLogobtn")
updateLogobtn.onclick=function(){
  window.location.href="../HTML/Cart.html"
}

//GoHome
var hom=document.getElementsByClassName("hom")
Array.from(hom)[0].onclick=function(){
  window.location.href="../index.html"
}

// subtotal
var subtotal=document.getElementsByClassName("subtotal")
var grandTotal=document.getElementsByClassName("grandTotalsum")
var gt=Array.from(grandTotal)[0]
subtotal=Array.from(subtotal)[0]
function subtotalsum(){
  var sum=0;
 for(var i=0;i<cartHim.length;i++){
  sum+=Number(cartHim[i].Price)*Number(cartHim[i].quant)
 }subtotal.innerHTML="Subtotal: $ "+sum.toFixed(2)
 gt.textContent="Grand Total: $ "+sum.toFixed(2)
}
subtotalsum()

// Qunatity

// increase

 var incresebutton=document.getElementsByClassName("increasebtnClass")
var increaseArr=Array.from(incresebutton)
//var c=1
var qunatityClass=document.getElementsByClassName("qunatityClass")
function showQt(index){
// increaseArr[index].onclick=function(){
 // c++;
 var c=cartHim[index].quant
 c++;
  cartHim[index].quant=c
  //console.log(cartHim);
  localStorage.setItem("HimalayaUsStorage",JSON.stringify(cartHim))
  showAddedProducts(cartHim)
}

// decrease
var decreaseBt=document.getElementsByClassName("decreaseBtClass")
var decreaseArr=Array.from(decreaseBt)
function decreaseQuant(index){
 var d= cartHim[index].quant
 if(d>1){
 d--;
 cartHim[index].quant=d
 localStorage.setItem("HimalayaUsStorage",JSON.stringify(cartHim))
 showAddedProducts(cartHim)
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
var proceedToCheckout=document.querySelector(".proceedToCheckout")
proceedToCheckout.onclick=function(){
  // window.location.href="../HTML/"
  alert("Checkout Page")
}