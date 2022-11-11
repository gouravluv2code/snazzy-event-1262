let details=JSON.parse(localStorage.getItem("person-details"))||[];

let checkdetails=document.querySelector('form');
checkdetails.addEventListener('submit',function(event){
    event.preventDefault();
    let flag="Wrong Credentials"
    if(checkdetails.mail.value=="" || checkdetails.pass.value==""){
            alert("please fill al the details")
    }else{
        details.forEach(function(element){
        if(element.email===checkdetails.mail.value && element.password===checkdetails.pass.value){
            flag="Login Successfully";
           }
          
        })
        alert(flag);
    }
})


