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
// s.onmouseover=function(){
//     shopOnHoverDiv.style.visibility="visible"
//     upline.style.visibility="visible"
// }

// product page 
var c=0;
var hid1=document.getElementById("hidden1")
var show1=document.getElementById("click1toshowhidden")
show1.onclick=function(){
    c++;
    if(c%2!==0){
        hid1.style.display="block"
    }else{
        hid1.style.display="none"
    }
 
}

var c=0;
var hid2=document.getElementById("hidden2")
var show2=document.getElementById("click2toshowhidden")
show2.onclick=function(){
    c++;
    if(c%2!==0){
        hid2.style.display="block"
        hid2.style.display="flex"
    }else{
        hid2.style.display="none"
    }
}
var c=0;
var hid3=document.getElementById("hidden3")
var show3=document.getElementById("click3toshowhidden")
show3.onclick=function(){
    c++;
    if(c%2!==0){
        hid3.style.display="block"
        hid3.style.display="flex"
    }else{
        hid3.style.display="none"
    }
}
var c=0;
var hid4=document.getElementById("hidden4")
var show4=document.getElementById("click4toshowhidden")
show4.onclick=function(){
    c++;
    if(c%2!==0){
        hid4.style.display="block"
        hid4.style.display="flex"
    }else{
        hid4.style.display="none"
    }
}
var c=0;
var hid5=document.getElementById("hidden5")
var show5=document.getElementById("click5toshowhidden")
show5.onclick=function(){
    c++;
    if(c%2!==0){
        hid5.style.display="block"
        hid5.style.display="flex"
    }else{
        hid5.style.display="none"
    }
}

//productPage

var proArr=[
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
      Name:"Back to Balance Cleanse™",
      Price:"29.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Boswellia-60---Box-Bottle_1024x.png?v=1595862802",
      Name:"Boswellia",
      Price:"14.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-58_1024x.png?v=1591027935",
      Name:"Chyavanprash",
      Price:"13.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962",
      Name:"ComfortCleanse®",
      Price:"Sold",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814",
      Name:"Curcumin Complete™",
      Price:"18.99",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900",
      Name:"DermaCare®",
      Price:"22.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-69_1024x.png?v=1590836866",
      Name:"FlorAvani®",
      Price:"39.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-126_1024x.png?v=1591028001",
      Name:"GlucoCare®",
      Price:"24.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_1024x.png?v=1590836878",
      Name:"Guggul",
      Price:"15.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_fbc92680-5171-436b-acc1-6a5a6a2ac59c_1024x.png?v=1591028013",
      Name:"HeartCare®",
      Price:"22.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOENERGYBOX_BOTTLE_1024x.jpg?v=1608243299",
      Name:"Hello Energy®",
      Price:"23.99",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOJOYBOX_BOTTLE_1024x.jpg?v=1608241956",
      Name:"Hello Joy®",
      Price:"23.99",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOPEACEBOX_BOTTLE_1024x.jpg?v=1608243907",
      Name:"Hello Peace®",
      Price:"23.99",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027",
      Name:"Holy Basil",
      Price:"12.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/ImmunoCare-120---Box-Bottle_1024x.png?v=1595814320",
      Name:"ImmunoCare®",
      Price:"23.95",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/JointCare-120---Box-Bottle_1024x.png?v=1595814579",
      Name:"JointCare®",
      Price:"Sold",
    },
  ]

  var parent=document.getElementById("productsAddingMaindiv")
function showprod(){
  proArr.forEach(function(element,index){
      var productdetailContainer=document.createElement("div")
      var productImage=document.createElement("img")
      var productName=document.createElement("p")
      var productPrice=document.createElement("p")
      var addToCartBt=document.createElement("button")
      var btnAndPrice=document.createElement("div")

      productdetailContainer.setAttribute("class","productdetailsDiv")
      productImage.setAttribute("id","pImage")
      productName.setAttribute("id","pName")
      productPrice.setAttribute("id","pPrice")
      addToCartBt.setAttribute("id","addCartBt")
      btnAndPrice.setAttribute("id","btnAndPrice")
      
    addToCartBt.onclick=function(){
      AddToCart(element)
     
    }

      productImage.src=element.Image
      productName.innerHTML=element.Name
      productPrice.innerHTML=element.Price
      btnAndPrice.append(addToCartBt,productPrice)
      productdetailContainer.append(productImage,productName,btnAndPrice)
      parent.appendChild(productdetailContainer)
  });

}
showprod()
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

  // signin&up

  var signIn=document.getElementById("signIn")
  signIn.onclick=function(){
    window.location.href="../HTML/Signin.html"
  }
 
// localStorage

if (localStorage.getItem("HimalayaUsStorage") === null) {
  localStorage.setItem("HimalayaUsStorage", JSON.stringify([]));
};


  // addcartbutton

  var ProductArr=JSON.parse(localStorage.getItem("HimalayaUsStorage"))

  function AddToCart(element){
    ProductArr.push(element)
    alert("Product is Added in Cart")
   localStorage.setItem("HimalayaUsStorage",JSON.stringify(ProductArr))
  }
   

  // smallCart

  var smallcartHim=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
var smallCartParent=document.getElementById("ProductsDivClickedOnCart")
function showp(){
  smallcartHim.forEach(function(el,index){
  var sdiv=document.createElement("div")
  sdiv.setAttribute("id","sdiv")
var pimg=document.createElement("img")
var pname=document.createElement("p")
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

  