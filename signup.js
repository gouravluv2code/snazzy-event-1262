let formDetails =document.querySelector('form');

let details=JSON.parse(localStorage.getItem('person-details'))||[];
formDetails.addEventListener('submit',function(event){
    event.preventDefault();
    let obj={
    firstName:formDetails.fName.value,
    lastName:formDetails.lName.value,
    email:formDetails.mail.value,
    }
    if(obj.fName=="" || obj.lName=="" || obj.mail==""){
        alert("please fill al the details")
    }
    else{
        details.push(obj);
        localStorage.setItem("person-details",JSON.stringify(details));
            window.location.replace("otp.html")
    }
   
})