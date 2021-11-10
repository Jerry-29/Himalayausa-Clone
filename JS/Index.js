
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
  

// Data

var myArr=[ {
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
  Name:"Back to Balance Cleanse™",
  Price:"29.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
  quant:"1",
  view:"true",
  productPage:"../HTML/productDescription.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Boswellia-60---Box-Bottle_1024x.png?v=1595862802",
  Name:"Boswellia",
  Price:"14.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
  quant:"1",
  view:"true",
  productPage:"../HTML/productDescription2.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-58_1024x.png?v=1591027935",
  Name:"Chyavanprash",
  Price:"13.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription3.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962",
  Name:"ComfortCleanse®",
  Price:"24.99",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1",
   productPage:"../HTML/productDescription4.html", 
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814",
  Name:"Curcumin Complete™",
  Price:"18.99",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription5.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900",
  Name:"DermaCare®",
  Price:"22.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription6.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-69_1024x.png?v=1590836866",
  Name:"FlorAvani®",
  Price:"39.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription7.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-126_1024x.png?v=1591028001",
  Name:"GlucoCare®",
  Price:"24.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription8.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_1024x.png?v=1590836878",
  Name:"Guggul",
  Price:"15.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription9.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_fbc92680-5171-436b-acc1-6a5a6a2ac59c_1024x.png?v=1591028013",
  Name:"HeartCare®",
  Price:"22.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription10.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOENERGYBOX_BOTTLE_1024x.jpg?v=1608243299",
  Name:"Hello Energy®",
  Price:"23.99",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription11.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOJOYBOX_BOTTLE_1024x.jpg?v=1608241956",
  Name:"Hello Joy®",
  Price:"23.99",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription12.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOPEACEBOX_BOTTLE_1024x.jpg?v=1608243907",
  Name:"Hello Peace®",
  Price:"23.99",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription13.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027",
  Name:"Holy Basil",
  Price:"12.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription14.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/ImmunoCare-120---Box-Bottle_1024x.png?v=1595814320",
  Name:"ImmunoCare®",
  Price:"23.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
   productPage:"../HTML/productDescription15.html",
},
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/JointCare-120---Box-Bottle_1024x.png?v=1595814579",
  Name:"JointCare®",
  Price:"21.49",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
  quant:"1", 
  productPage:"../HTML/productDescription16.html",
},
]

var parent=document.getElementById("productslido")
//localStorage.setItem("HimalayaUsStorage",JSON.stringify([]))
var storeArr=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
var pdiv=document.getElementById("pdiv")
var next=document.getElementById("next")



// var cl=0;
// if(cl==0){var kim=myArr.slice(s,e)}
// window.onload=function(){
//   show(myArr.slice(0,4))
// }
//show(myArr.slice(s,e))

var chagnelineSize=document.getElementsByClassName("chagnelineSize")
var linesArray =Array.from(chagnelineSize)

// if(st==1){
//   linesArray[st].style.width="8%"
//   linesArray[st].style.backgroundColor="lightseagreen"
//   linesArray[st-1].style.width="4%"
//   linesArray[st-1].style.backgroundColor="rgb(219, 215, 215)"
// }
var st=1;
var e=5
var backnav=document.getElementById("backnav")
backnav.onclick=function(){
  showSlide()
  // linesArray[st+1].style.width="8%"
  // linesArray[st+1].style.backgroundColor="lightseagreen"
}
next.addEventListener("click",showSlide)
 //var kim=myArr.slice(s,e)
function showSlide(){
   parent.innerText=""
    show(myArr.slice(st,e))
  if(e==myArr.length){
      st=1;
      e=5;
     
  } 
  linesArray[st].style.width="8%"
  linesArray[st].style.backgroundColor="lightseagreen"
  linesArray[st-1].style.width="4%"
  linesArray[st-1].style.backgroundColor="rgb(219, 215, 215)"
  for(var i=0;i<linesArray.length;i++){
    linesArray[i].onmouseover=function(){
      linesArray[i].style.backgroundColor="black"
    }
  }
  //linesArray[e].style.width="4%"
 // console.log(myArr);
 // console.log(st);
  st++;
  e++;
  console.log(e);
}showSlide()

//showSlide(myArr.slice(s,e))
var miniArr=myArr.slice(s,e)
function show(kim){
    kim.forEach(function(el){
        var pdiv=document.createElement("div") 
  pdiv.setAttribute("id","pdetailsDiv") 
  var inlineDiv=document.createElement("div") 
  inlineDiv.setAttribute("id","inlineDivbtntxt") 
  var pImage=document.createElement("img")
  var pName=document.createElement("p")
  var pPrice=document.createElement("p")
  pPrice.setAttribute("id","priceInline")
  var addToCartButtun=document.createElement("button")
  addToCartButtun.setAttribute("id","buttonInline")

  var popupcartDetailDiv=document.getElementById("popupcartDetailDiv")
  addToCartButtun.onclick=function(){
   storeArr.push(el)
   localStorage.setItem("HimalayaUsStorage",JSON.stringify(storeArr))
  
   var store=JSON.parse(localStorage.getItem("HimalayaUsStorage"))

   var showcartItemsNumber=document.getElementById("showItemNumber")

   showcartItemsNumber.innerHTML=store.length
   console.log(store.length);
var itemsInCart=document.getElementsByClassName("itemsInCart")
Array.from(itemsInCart)[0].innerHTML="There are " +((store.length))+" items in your Cart"
var total=document.getElementsByClassName("popUpTotal")

var popProductImage=document.getElementsByClassName("popProductImage")
Array.from(popProductImage)[0].src=store[store.length-1].Image

var sum=0;
for(var i=0;i<store.length;i++){
sum+=Number(store[i].Price)*Number(store[i].quant)
}
Array.from(total)[0].innerHTML="Total : $"+sum.toFixed(2)

var popProductName=document.getElementsByClassName("popProductName")
Array.from(popProductName)[0].innerHTML=store[store.length-1].Name

var popUpTotal=document.getElementsByClassName("popProductPrice")
Array.from(popUpTotal)[0].innerHTML=store[store.length-1].quant+" x "+"$"+store[store.length-1].Price
// popupDiv
  //  window.location.href="../index.html"
  var body=document.querySelector("#container")
   popupcartDetailDiv.style.display="block"
   body.style.opacity=".7"
   // smallcartShow(storeArr)
   
  }
  //console.log(mik);
  //console.log(el);
  pImage.src=el.Image
  pName.innerText=el.Name
  pPrice.innerText=el.Price
  addToCartButtun.innerText="AD"
  inlineDiv.append(addToCartButtun,pPrice)
  pdiv.append(pImage,pName,inlineDiv)
  parent.append(pdiv)
    })

  
}
var store=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
var showcartItemsNumber=document.getElementById("showItemNumber")
showcartItemsNumber.innerHTML=store.length
window.onload=function(){
  showcartItemsNumber.innerHTML=store.length
 }

 var imghoverinsta1=document.getElementById("imghoverinsta1")
var instalogo1=document.getElementById("instalogo1")
var imghoverinsta4=document.getElementById("imghoverinsta1")
var instalogo2=document.getElementById("instalogo2")
var imghoverinsta4=document.getElementById("imghoverinsta2")
var instalogo3=document.getElementById("instalogo3")
var imghoverinsta3=document.getElementById("imghoverinsta3")
var instalogo4=document.getElementById("instalogo4")
var imghoverinsta4=document.getElementById("imghoverinsta4")
imghoverinsta4.onmouseenter=function(){
    instalogo4.style.visibility="visible"
}
imghoverinsta4.onmouseleave=function(){
    instalogo4.style.visibility="hidden"
}

imghoverinsta3.onmouseenter=function(){
    instalogo3.style.visibility="visible"
}
imghoverinsta3.onmouseleave=function(){
    instalogo3.style.visibility="hidden"
}

imghoverinsta2.onmouseenter=function(){
    instalogo2.style.visibility="visible"
}
imghoverinsta2.onmouseleave=function(){
    instalogo2.style.visibility="hidden"
}

imghoverinsta1.onmouseenter=function(){
    instalogo1.style.visibility="visible"
}
imghoverinsta1.onmouseleave=function(){
    instalogo1.style.visibility="hidden"
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


  var productMainDiv=document.getElementById("productPageDiv")
  var slideshowMainDiv=document.getElementById("slideshowMainDiv")
  var m=document.getElementById("unlockWisdomDivid")
  var r=document.getElementById("reivewboxes")
  var inst=document.getElementById("instafollowdivbox")
  var fd=document.getElementById("footdiv")
  var hoverforproductpageToshow=document.getElementById("hoverforproductpageToshow")
  hoverforproductpageToshow.onclick=function(){
    productMainDiv.style.display="block"
    slideshowMainDiv.style.display="none"
     r.style.display="none"
     m.style.display="none"
     inst.style.display="none"
     fd.style.marginTop="12%"
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

  // signin&up

  var signIn=document.getElementById("signIn")
  signIn.onclick=function(){
    window.location.href="../HTML/Signin.html"
  }
 
  // scrollToTop

var goToTOP=document.getElementById("goToTOP")
goToTOP.onclick=function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll=function(){
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    goToTOP.style.display = "block";
  } else {
    goToTOP.style.display = "none";
  }
}

  // smallCart
  
  var smallcartHim=JSON.parse(localStorage.getItem("HimalayaUsStorage"))||[]
  
var smallCartParent=document.getElementById("ProductsDivClickedOnCart")
function showp(smallcartHim){
  smallcartHim.forEach(function(el,index){
  var sdiv=document.createElement("div")
  sdiv.setAttribute("id","sdiv")
//showcartItemsNumber.innerHTML=smallcartHim.length
var pimg=document.createElement("img")
var pname=document.createElement("p")
var pprice=document.createElement("p")
pimg.src=el.Image
pprice.innerHTML=el.quant+" x "+"$"+el.Price
pname.innerHTML=el.Name


sdiv.append(pimg,pname,pprice)
smallCartParent.append(sdiv) 
});




}
showp(smallcartHim)
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

 var popupcartDetailDiv=document.getElementById("popupcartDetailDiv")
 var closePopedScreen=document.getElementById("closePopedScreen")
 var body=document.querySelector("#container")
 closePopedScreen.onclick=function(){
popupcartDetailDiv.style.display="none"
body.style.opacity="1"
 }

var reviewDiv=document.getElementsByClassName("sliderev")
var revdiv=Array.from(reviewDiv)
var left=0;
var right=3;
window.setInterval(timer,1000)
var slideArray=revdiv.slice(left,right)
function timer(){
slideArray.forEach(function(el){
  el.style.display="block"

})

}
left++;
right++;
timer()

var hoverforproductpageToshow=document.getElementById("hoverforproductpageToshow")
hoverforproductpageToshow.onclick=function(){
  window.location.href="../HTML/Products.html"
}