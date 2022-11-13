let details=JSON.parse(localStorage.getItem("person-details"))||[];

let checkdetails=document.querySelector('form');
checkdetails.addEventListener('submit',function(event){
    event.preventDefault();
    if(checkdetails.mail.value=="" || checkdetails.pass.value==""){
            alert("please fill al the details")
    }
    else{
        details.forEach(function(element){
        if(element.email===checkdetails.mail.value && element.password===checkdetails.pass.value){
            alert("Login Successfully")
            window.location.replace("home.html")
           }
           else{
            alert("Wrong Credentials")
           }
        })
    }
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


