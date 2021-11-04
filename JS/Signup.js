
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

var arr= JSON.parse(localStorage.getItem("userHimalaya"))
arr.forEach(function check(u) {
    if (u.uMail === userLoginData.uMail && userLoginData.uMail.length > 0) {
        window.alert("This Email is already resgistered with us!");
        count++;
    }
});



if (userLoginData.uPass.length < 8) { 
    window.alert("Password should be more than 8 charecter.")
 }
else if(userLoginData.uMail.length>5 && userLoginData.uPass.length>8){
    arr.push(userLoginData)
}
localStorage.setItem("userHimalaya",JSON.stringify(arr))
}
}