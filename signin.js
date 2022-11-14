let details=JSON.parse(localStorage.getItem("person-details"))||[];

let checkdetails=document.querySelector('form');
checkdetails.addEventListener('submit',function(event){
    let flag ="Wrong Credentials"
    event.preventDefault();
    if(checkdetails.mail.value=="" || checkdetails.pass.value==""){
            alert("please fill al the details")
    }
    if(checkdetails.mail.value=="gourav@gmail.com" || checkdetails.pass.value=="9675"){
        flag="Login Successfully"
        window.location.replace("admin.html")
    }
    else{
        details.forEach(function(element){
        if(element.email===checkdetails.mail.value && element.password===checkdetails.pass.value){
            flag="Login Successfully"
            window.location.replace("home.html")
           }
        })
    }
    alert(flag)
})


let is_visible=false;
function see(){
 let input=document.getElementById("pass");
 let see= document.getElementById("see");
 if(is_visible){
     input.type="password";
     is_visible=false;
     see.style.color="gray";
 }
 else{
     input.type="text";
     is_visible=true;
     see.style.color="#262626"
 }
}


