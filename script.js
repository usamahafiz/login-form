// function toastifyError (text){

//     Toastify({
//         text: text || "This is a toast",
//         duration: 2500,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "red",
//         },
       
//       }).showToast();
//  }

//  function toastifySuccess (text){

//     Toastify({
//         text: text || "This is a toast",
//         duration: 2500,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
       
//       }).showToast();
//  

const getInputFieldValue=(id)=>{
    return document.getElementById(id).value
}

const handlelogin =() =>{
    event.preventDefault();

    let fullName=getInputFieldValue("fullName")
    let email=getInputFieldValue("email")
    let password=getInputFieldValue("password")

    if(fullName.lenght<3){
        return alert("Full name must be at least 3 characters")
    }
    if(email.lenght<3){
        return alert("Please enter your correct email")
    }
    if(password.lenght <6){
        return alert("Please enter correct password")
    }

    // window.location.href="http://127.0.0.1:5500/dashboard.html"
    document.getElementById("logincard").style.display="none"
    document.getElementById("loginbutton").style.display="none"
    document.getElementById("homepage").style.display="block"
    document.getElementById("logoutbutton").style.display="block"
    document.getElementById("fullnameop").innerHTML=fullName
}
const handlelogout=()=>{
    document.getElementById("logincard").style.display="block"
    document.getElementById("loginbutton").style.display="block"
    document.getElementById("homepage").style.display="none"
    document.getElementById("logoutbutton").style.display="none"
    


}

window.onload=()=>{
    let year = newDate().getFullYear()
    document.getElementById("year").innerHTML=year
}