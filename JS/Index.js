
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

var myArr=[{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Ashwagandha_BoxBottle_30_800x.jpg?v=1591028054",
    productName:"Organic Ashwagandha",
    productPrice:"13.95",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_800x.png?v=1597743896",
    productName:"Simply Mint Whitening",
    productPrice:"5.99",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/LiverCare-90---Box-Bottle_800x.png?v=1595815804",
    productName:"Liver Care",
    productPrice:"27.95",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/ImmunoCare-120---Box-Bottle_800x.png?v=1595814320",
    productName:"ImmunoCare",
    productPrice:"23.95",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Neem-and-Pom---Box-Tube_800x.png?v=1597744049",
    productName:"Neem & Promegranate Original Toothpaste",
    productPrice:"5.99",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-23_800x.png?v=1590836890",
    productName:"Organic Amla",
    productPrice:"18.95",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Bitter-Melon-30---Box-Bottle_800x.png?v=1595862276",
    productName:"Organic Bitter Melon",
    productPrice:"11.95",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Gymnema_Box_Bottle_30s_800x.png?v=1591028093",
    productName:"Organic Gymnema",
    productPrice:"12.95",
},{
    productImage:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_800x.png?v=1597743896",
    productName:"Simply Mint Whitening Toothpaste",
    productPrice:"5.99",
},
]

// appednind data 

var parent=document.getElementById("productslido")
function showProducts(){
myArr.forEach(function(element,index){
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

pImage.src=element.productImage
pName.innerText=element.productName
pPrice.innerText=element.productPrice
addToCartButtun.innerText="AD"
inlineDiv.append(addToCartButtun,pPrice)
pdiv.append(pImage,pName,inlineDiv)
parent.append(pdiv)
})
}
showProducts()

// var imghoverinsta1=document.getElementById("imghoverinsta1")
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

// product page 


// var proArr=[
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
//       Name:"Back to Balance Cleanse™",
//       Price:"29.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Boswellia-60---Box-Bottle_1024x.png?v=1595862802",
//       Name:"Boswellia",
//       Price:"14.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-58_1024x.png?v=1591027935",
//       Name:"Chyavanprash",
//       Price:"13.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962",
//       Name:"ComfortCleanse®",
//       Price:"Sold",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814",
//       Name:"Curcumin Complete™",
//       Price:"18.99",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900",
//       Name:"DermaCare®",
//       Price:"22.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-69_1024x.png?v=1590836866",
//       Name:"FlorAvani®",
//       Price:"39.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-126_1024x.png?v=1591028001",
//       Name:"GlucoCare®",
//       Price:"24.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_1024x.png?v=1590836878",
//       Name:"Guggul",
//       Price:"15.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_fbc92680-5171-436b-acc1-6a5a6a2ac59c_1024x.png?v=1591028013",
//       Name:"HeartCare®",
//       Price:"22.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOENERGYBOX_BOTTLE_1024x.jpg?v=1608243299",
//       Name:"Hello Energy®",
//       Price:"23.99",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOJOYBOX_BOTTLE_1024x.jpg?v=1608241956",
//       Name:"Hello Joy®",
//       Price:"23.99",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOPEACEBOX_BOTTLE_1024x.jpg?v=1608243907",
//       Name:"Hello Peace®",
//       Price:"23.99",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027",
//       Name:"Holy Basil",
//       Price:"12.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/ImmunoCare-120---Box-Bottle_1024x.png?v=1595814320",
//       Name:"ImmunoCare®",
//       Price:"23.95",
//     },
//     {
//       Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/JointCare-120---Box-Bottle_1024x.png?v=1595814579",
//       Name:"JointCare®",
//       Price:"Sold",
//     },
//   ]

//   var parent=document.getElementById("productsAddingMaindiv")

//   proArr.forEach(function(element,index){
//       var productdetailContainer=document.createElement("div")
//       var productImage=document.createElement("img")
//       var productName=document.createElement("p")
//       var productPrice=document.createElement("p")
//       var addToCartBt=document.createElement("button")
//       var btnAndPrice=document.createElement("div")

//       productdetailContainer.setAttribute("class","productdetailsDiv")
//       productImage.setAttribute("id","pImage")
//       productName.setAttribute("id","pName")
//       productPrice.setAttribute("id","pPrice")
//       addToCartBt.setAttribute("id","addCartBt")
//       btnAndPrice.setAttribute("id","btnAndPrice")
      
//       addToCartBt.addEventListener("click",addToCart)
//       function addToCart (){

//       }

//       productImage.src=element.Image
//       productName.innerHTML=element.Name
//       productPrice.innerHTML=element.Price
//       btnAndPrice.append(addToCartBt,productPrice)
//       productdetailContainer.append(productImage,productName,btnAndPrice)
//       parent.appendChild(productdetailContainer)
//   });

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
  var showcartItemsNumber=document.getElementById("showItemNumber")
  var smallcartHim=JSON.parse(localStorage.getItem("HimalayaUsStorage"))||[]
  
var smallCartParent=document.getElementById("ProductsDivClickedOnCart")
function showp(smallcartHim){
  smallcartHim.forEach(function(el,index){
  var sdiv=document.createElement("div")
  sdiv.setAttribute("id","sdiv")
showcartItemsNumber.innerHTML=smallcartHim.length
var pimg=document.createElement("img")
var pname=document.createElement("p")
var pprice=document.createElement("p")
pimg.src=el.Image
pprice.innerHTML=el.quant+" x "+"$"+el.Price
pname.innerHTML=el.Name

// popupDiv
//var store=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
// var itemsInCart=document.getElementsByClassName("itemsInCart")
// Array.from(itemsInCart)[0].innerHTML="There are " +((smallcartHim.length))+" items in your Cart"
// var total=document.getElementsByClassName("popUpTotal")

// var sum=0;
// for(var i=0;i<smallcartHim.length;i++){
// sum+=Number(smallcartHim[i].Price)*Number(smallcartHim[i].quant)
// }
// Array.from(total)[0].innerHTML="Total : $"+sum.toFixed(2)

// var popProductName=document.getElementsByClassName("popProductName")
// Array.from(popProductName)[0].innerHTML=smallcartHim[smallcartHim.length-1].Name

// var popUpTotal=document.getElementsByClassName("popProductPrice")
// Array.from(popUpTotal)[0].innerHTML=smallcartHim[smallcartHim.length-1].quant+" x "+"$"+smallcartHim[smallcartHim.length-1].Price
// popupDiv

sdiv.append(pimg,pname,pprice)
smallCartParent.append(sdiv)
});

// prodes

// var proDescArr=
//   {
//     Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
//     Name:"Back to Balance Cleanse™",
//     Price:"29.95",
//     des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
//     quant:"1",
//   }
//   var count=1
// var countershow=document.getElementById("countershow")
// countershow.innerHTML=count
// var buttoncounterIncr=document.getElementById("buttoncounter2")
// buttoncounterIncr.onclick=function(){
//   count++;
// proDescArr.quant=count
// countershow.innerHTML=count

// }

//-------------------- decreaseQuantity
// var buttoncounter1=document.getElementById("buttoncounter1")
// buttoncounter1.onclick=function(){
//   if(countershow.innerHTML>1){
//     count--;
//     proDescArr.quant=count;
//     countershow.innerHTML=count
//   }
// }

// prodesc

// var store=JSON.parse(localStorage.getItem("HimalayaUsStorage"))||[]
// var addToCartBtn=document.getElementById("addToCartBtn")
// var popupcartDetailDiv=document.getElementById("popupcartDetailDiv")
// addToCartBtn.onclick=function(){
//   store.push(proDescArr)
//  // window.location.href="../HTML/productDescription.html"
//   popupcartDetailDiv.style.display="block"
 
//   localStorage.setItem("HimalayaUsStorage",JSON.stringify(store))
//   showp(store)
//  // window.scrollTo(0,document.body.scrollHeight);
// }



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
