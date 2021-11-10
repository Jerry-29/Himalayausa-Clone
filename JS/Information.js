
var InfoStore=JSON.parse(localStorage.getItem("userHimalaya")||[])
console.log(InfoStore);
// let userLoginData={
//     uname:uname,
//     ulastName:ulastName,
//     uMail:uMail,
//     uPass:uPass,
//     uAddress:uAddress,
//     uCity:uCity,
//     uCountry: uCountry,
//     uState:uState,
//     uZip:uZip,
//     uPhon:uPhon,
//  } 
var continueToShip=document.querySelector(".continueToShip") 
window.onload=function(){
    var form=document.getElementById("form")

var emailInp=document.querySelector(".emailInp")
emailInp.value=InfoStore[InfoStore.length-1].uMail

var nameInp=document.querySelector(".nameInp")
nameInp.value=InfoStore[InfoStore.length-1].uname

var lastInp=document.querySelector(".lastInp")
lastInp.value=InfoStore[InfoStore.length-1].ulastName

}

function submitInfo(event){
event.preventDefault()
if(localStorage.getItem("UserAddress")===null){
    localStorage.setItem("UserAddress",JSON.stringify([]))
}

 var address=document.querySelector(".address").value
 var appartment=document.querySelector(".appartment").value
 var city=document.querySelector(".city").value
var Country=document.querySelector(".Country").value
var State=document.querySelector(".State").value
var Zip=document.querySelector(".Zip").value
//var detailinpaddress=document.querySelector(".detailinpaddress")
var phon=document.querySelector(".phon").value
var continueToShip=document.querySelector(".continueToShip")

var addressArr=JSON.parse(localStorage.getItem("UserAddress"))

let userAddress={
    uAddress:address,
    uapparment:appartment,
    uCity:city,
    uCountry: Country,    
    uState:State,
    uZip:Zip,
    uPhon:phon,
 } 
 continueToShip.onclick=function(){
addressArr.push(userAddress)
localStorage.setItem("UserAddress",JSON.stringify(addressArr))
}

}

// prodcuts
var prodArr=JSON.parse(localStorage.getItem("HimalayaUsStorage"))||[]
var parent=document.querySelector(".Imagenameprice")
function showProducts(){
    prodArr.forEach(element => {
        var maindiv=document.createElement("div")
        maindiv.setAttribute("class","maindiv")
        var pdiv=document.createElement("div")
        pdiv.setAttribute("class","pdiv")
        var price=document.createElement("p")
        price.setAttribute("class","pPrice")
        var name=document.createElement("p")
        var pQt=document.createElement("p")
        pQt.setAttribute("class","pqt")
        var Pimg=document.createElement("img")
        Pimg.setAttribute("class","Pimg")
        
        Pimg.src=element.Image
        price.innerHTML="$ "+element.Price+" x "+element.quant
        name.innerHTML=element.Name
        // pQt.innerHTML=element.quant
        pdiv.append(Pimg,name)
        maindiv.append(pdiv,price)
        parent.append(maindiv)

    });
}
showProducts()
var sum=0;
var subtotal=document.querySelector(".subTotalSum")
var totalSum=document.querySelector(".totalSum")
for(var i=0;i<prodArr.length;i++){
    sum+=Number(prodArr[i].Price)*Number(prodArr[i].quant)
}
subtotal.innerHTML="$ "+sum.toFixed(2)
totalSum.innerHTML="USD $"+sum.toFixed(2)

var coupn=document.getElementById("coupn")
var coupnBt=document.querySelector(".coupnBt")
coupnBt.onclick=function(){
if(coupn.value==="FIRSTUSER50"){
    totalSum.innerHTML="USD $"+((sum*50)/100).toFixed(2)
}else{
    alert("Invalid Coupon Code .Try FIRSTUSER50")
}
}