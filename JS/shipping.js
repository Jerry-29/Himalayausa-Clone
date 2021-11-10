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

var info=JSON.parse(localStorage.getItem("UserAddress"))
var addressInfo=document.querySelector(".addressInfo")
var contactInfo=document.querySelector(".contactInfo")
contactInfo.innerHTML="Contact : "+info[info.length-1].uPhon
addressInfo.innerHTML="Ship to : "+info[info.length-1].uAddress+" , "+info[info.length-1].uapparment+" , "+info[info.length-1].uCity+" , "+
                    info[info.length-1].uCity+"-"+info[info.length-1].uZip+","+info[info.length-1].uState+","+info[info.length-1].uCountry;




       var clickToChange=document.getElementsByClassName("clickToChange")
       var arr=Array.from(clickToChange)
       arr.forEach((el)=>{
           el.onclick=function(){
               window.location.href="../HTML/Information.html"
           }
       })

