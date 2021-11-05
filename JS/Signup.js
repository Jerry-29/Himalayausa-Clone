
function signup(e){
e.preventDefault();

let form=document.getElementById("myForm")
// console.log(form);

let userClick=document.getElementById("createAcc")
let uname=form.firstName.value
let ulastName=form.lastName.value
let uMail=form.userEmail.value
let uPass=form.userPassword.value
if(uname.length==0 || uMail.length==0 || uPass.length==0 ||ulastName.length==0){
    alert("Invalid Input")
}else{

if (localStorage.getItem("userHimalaya") === null) {
    localStorage.setItem("userHimalaya", JSON.stringify([]));
}

let userLoginData={
   uname:uname,
   ulastName:ulastName,
   uMail:uMail,
   uPass:uPass,
} 

var count=0;

var arr= JSON.parse(localStorage.getItem("userHimalaya"))
arr.forEach(function check(u) {
    if (u.uMail === userLoginData.uMail && userLoginData.uMail.length > 0) {
        window.alert("This Email is already resgistered with us!");
        count++;
    }
});


if (userLoginData.uPass.length < 8) { window.alert("Password should be more than 8 charecter.") }

//3- push new userLoginData to the array.

if (count === 0 && userLoginData.uMail.length > 0 && userLoginData.uPass.length > 7) { arr.push(userLoginData) }  // added a new user

localStorage.setItem("userHimalaya", JSON.stringify(arr));

}
}

let goStore=document.getElementById("return")
goStore.onclick=function(){
    window.location.href="../Index.html"
}

var gohome=document.getElementById("goHome")
gohome.onclick=function(){
    window.location.href="../Index.html"
}

var gologinPage=document.getElementById("goAccount")
gologinPage.onclick=function(){
    window.location.href="../HTML/Signin.html"
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
