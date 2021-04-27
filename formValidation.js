const emailregx = /^(([^<>()\[\]\\.,;:\s@"A-Z]+(\.[^<>()\[\]\\.,;:\s@"A-Z]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,7}))$/;
const passwordregx = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Za-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const namecheckregx = /^[a-zA-Z]{3,30}([\s])?[a-zA-Z]{0,30}([\s])?[a-zA-Z]{0,30}$/;


const Uname=document.querySelector("#name");
const email=document.querySelector("#email");
const subject=document.querySelector("#subject");
const message=document.querySelector("#message");



const submitbtn=document.querySelector("#form-btn")

submitbtn.addEventListener("click",(event)=>{

    if(!(email.value.match(emailregx) && Uname.value.match(namecheckregx) && message.value!="" && subject.value.match(namecheckregx)))
    {
        event.preventDefault();
        document.querySelector(".error").innerHTML="<p> Check input field.</p>";
    }
    else
    {
        document.querySelector(".error").innerHTML="";
    }
})
Uname.addEventListener("blur",()=>{
    if(!Uname.value.match(namecheckregx))
    {
        document.querySelector(".error").innerHTML="<p>Name is not valid!</p>"
    }
    else
    {
        document.querySelector(".error").innerHTML="";
    }
})
email.addEventListener("blur",()=>{
    if(!email.value.match(emailregx))
    {
        document.querySelector(".error").innerHTML="<p>Email is not valid!</p>"
    }
    else
    {
        document.querySelector(".error").innerHTML="";
    }
})
subject.addEventListener("blur",()=>{
    if(!subject.value.match(namecheckregx))
    {
        document.querySelector(".error").innerHTML="<p>Subject is not valid!</p>"
    }
    else
    {
        document.querySelector(".error").innerHTML="";
    }
})
message.addEventListener("blur",()=>{
    if(message.value=="")
    {
        document.querySelector(".error").innerHTML="<p>Message can not be empty.</p>"
    }
    else
    {
        document.querySelector(".error").innerHTML="";
    }
})