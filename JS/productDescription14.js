


var showProductImage=document.getElementsByClassName("showProductImage")
var showProductDetail=document.getElementsByClassName("showProductDetail")
var proImageid=document.getElementById("proImageid")
Array.from(showProductDetail)[0].onclick=function(){
  proImageid.src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027"
  // Array.from(showProductDetail)[0].style.border="1.5px"
  // Array.from(showProductImage)[0].style.border="none"
}
Array.from(showProductImage)[0].onclick=function(){
  proImageid.src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Back-to-Balance-Cleanse-1_1024x1024.png?v=1595305403"
  // Array.from(showProductImage)[0].style.border="1.5px"
  // Array.from(showProductDetail)[0].style.border="none"
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
var itemsInCart=document.getElementsByClassName("itemsInCart")
Array.from(itemsInCart)[0].innerHTML="There are " +((smallcartHim.length))+" items in your Cart"
var total=document.getElementsByClassName("popUpTotal")

var sum=0;
for(var i=0;i<smallcartHim.length;i++){
sum+=Number(smallcartHim[i].Price)*Number(smallcartHim[i].quant)
}
Array.from(total)[0].innerHTML="Total : $"+sum.toFixed(2)

var popProductName=document.getElementsByClassName("popProductName")
Array.from(popProductName)[0].innerHTML=smallcartHim[smallcartHim.length-1].Name

var popUpTotal=document.getElementsByClassName("popProductPrice")
Array.from(popUpTotal)[0].innerHTML=smallcartHim[smallcartHim.length-1].quant+" x "+"$"+smallcartHim[smallcartHim.length-1].Price
// popupDiv

sdiv.append(pimg,pname,pprice)
smallCartParent.append(sdiv)
});

// prodes

var proDescArr=
{
  Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027",
  Name:"Holy Basil",
  Price:"12.95",
  des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
   quant:"1", 
}
  var count=1
var countershow=document.getElementById("countershow")
countershow.innerHTML=count
var buttoncounterIncr=document.getElementById("buttoncounter2")
buttoncounterIncr.onclick=function(){
  count++;
proDescArr.quant=count
countershow.innerHTML=count

}

//-------------------- decreaseQuantity
var buttoncounter1=document.getElementById("buttoncounter1")
buttoncounter1.onclick=function(){
  if(countershow.innerHTML>1){
    count--;
    proDescArr.quant=count;
    countershow.innerHTML=count
  }
}

// prodesc

var store=JSON.parse(localStorage.getItem("HimalayaUsStorage"))||[]
var addToCartBtn=document.getElementById("addToCartBtn")
var popupcartDetailDiv=document.getElementById("popupcartDetailDiv")
addToCartBtn.onclick=function(){
  store.push(proDescArr)
 // window.location.href="../HTML/productDescription.html"
  popupcartDetailDiv.style.display="block"
 
  localStorage.setItem("HimalayaUsStorage",JSON.stringify(store))
  showp(store)
 // window.scrollTo(0,document.body.scrollHeight);
}



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
  
var closePopedScreen=document.getElementById("closePopedScreen")
closePopedScreen.onclick=function(){
  popupcartDetailDiv.style.display="none"
}
var goToHerbalSupplements=document.getElementById("goToHerbalSupplements")
goToHerbalSupplements.onclick=function(){
  window.location.href="../HTML/Products.html"
}
var homnav=document.querySelector(".homnav")
homnav.onclick=function(){
  window.location.href="../Index.html"
}
var buyitnow=document.querySelector("#buyitnow")
buyitnow.onclick=function(){
  alert("checkoutPage")
}
var findoutdiv=document.querySelector(".findoutdiv")
var findOUT=document.getElementById("findOUT")
var c=0;
findOUT.onclick=function(){
  c++;
  if(c%2!=0){
  findoutdiv.style.display="block"
  }else{
    findoutdiv.style.display="none"
  }
}

var justDescribe=document.getElementById("justDescribeDiv")
var d=0;
var descriptionList=document.getElementById("describtionlist")
justDescribe.onclick=function(){
  d++;
  if(d%2!=0){
    descriptionList.style.display="block"
  }else{
    descriptionList.style.display="none"
  }
}

var descriptionListwhatsinIt=document.getElementById("descriptionListwhatsinIt")
var showwhatsinit=document.getElementById("showwhatsinit")
var describeImg=document.querySelector(".describeImg")
var m=0;
showwhatsinit.onclick=function(){
  m++;
  if(m%2!=0){
    descriptionListwhatsinIt.style.display="block"
    describeImg.style.display="block"
    describeImg.style.display="flex"
    describeImg.style.gap="5%"
  }else{
    descriptionListwhatsinIt.style.display="none"
    describeImg.style.display="none"
  }
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