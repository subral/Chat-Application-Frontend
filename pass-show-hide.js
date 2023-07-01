const paswdFeild = document.querySelector(".form .field input[type='password']"),
toggleBtn = document.querySelector(".form .field i");


toggleBtn.onclick = ()=>{
    if(paswdFeild.type == "password"){
        paswdFeild.type = "text";
        toggleBtn.classList.add("active");
    }else{
        paswdFeild.type = "password";
        toggleBtn.classList.remove("active");
    }
}
