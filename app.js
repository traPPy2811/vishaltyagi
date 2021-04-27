const hamburger=document.querySelector(".hamburger");
const navBar=document.querySelector(".nav-bar");
const hamHover=document.querySelector(".ham-container");
var flag=0;
var tf=0;
hamburger.addEventListener('click',()=>{

    query();
    if(flag==0)
    {
        flag=1;
    }
    else{
        flag=0;
    }
})
const menuTittle= document.getElementsByClassName("title");
for(var i=0;i<menuTittle.length;i++)
{
    menuTittle[i].addEventListener("click",()=>
    {
        if(flag===1)
        {
            query();
            flag=0;
        }  
      
    })
}
function query()
{
    hamburger.classList.toggle("hamburger-active");
    navBar.classList.toggle("ham-nav-bar");
    hamHover.classList.toggle("ham-container-hover");
    hamHover.classList.toggle("cross-hover");
}
const body=document.getElementsByTagName("body");
body[0].addEventListener("click",(e)=>{
    var className=e.target.classList[0];
    if(className!=="title" && className!== "ham-container" && className!== "hamburger"  && className!== "hamburger-menu" && className!=="nav-ul" && className!=="nav-bar")
    {
       if(flag===1)
       {
            query();
            flag=0;
       }
       if(className!="theme")
       {
           if(tf===1)
           {
                document.querySelector(".color-contain").classList.toggle("color-active");
                tf=0;
            }
       }
    }
})
window.addEventListener("scroll",()=>{
    if(flag===1 && window.scrollY>10)
    {
        hamburger.click();
        flag=0;
    }
})