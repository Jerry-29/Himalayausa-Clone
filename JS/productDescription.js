
var proDescArr=[
  {
    Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
    Name:"Back to Balance Cleanse™",
    Price:"29.95",
    des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    quant:"1",
  },
]

var store=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
var addToCartBtn=document.getElementById("addToCartBtn")
addToCartBtn.onclick=function(){
  store.push(proDescArr)
}

var showProductImage=document.getElementsByClassName("showProductImage")
var showProductDetail=document.getElementsByClassName("showProductDetail")
var proImageid=document.getElementById("proImageid")
Array.from(showProductDetail)[0].onclick=function(){
  proImageid.src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x1024.png?v=1591028195"
}
Array.from(showProductImage)[0].onclick=function(){
  proImageid.src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Back-to-Balance-Cleanse-1_1024x1024.png?v=1595305403"
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
