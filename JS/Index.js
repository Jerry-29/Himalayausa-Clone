
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
var shopOnHoverDiv=document.getElementById("shopOnHoverDiv")
shop.onpointerenter=function(){
    shopOnHoverDiv.style.visibility="visible"
    upline.style.visibility="visible"
}
shop.onmouseout=function(){
    shopOnHoverDiv.style.visibility="hidden"
    upline.style.visibility="hidden"
}
s.onmouseover=function(){
    shopOnHoverDiv.style.visibility="visible"
    upline.style.visibility="visible"
}

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