const theme=document.querySelector(".theme");
theme.addEventListener("click",()=>{
    document.querySelector(".color-contain").classList.toggle("color-active");
    if(tf===1)
    {
        tf=0;
    }
    else{
        tf=1;
    }
})
const root=document.querySelector(":root");
document.querySelector(".color-contain").addEventListener("click",(e)=>{
    if(e.target.classList[0]==="c")
    {
        let color=window.getComputedStyle(e.target,null).getPropertyValue("background-color");
        root.style.setProperty("--primary-color",color);
    }
})

document.querySelector(".light-mode").addEventListener("click",()=>{
    document.querySelector(".light-mode").classList.toggle("dark-mode");
    document.querySelector(".wrapper").classList.toggle('dark-theme');
    document.querySelector(".pic").classList.toggle('inverted');
})
window.addEventListener("load",()=>{
    var themeVal=window.getComputedStyle(root,null).getPropertyValue("--prefer-mode");
    themeVal=themeVal.slice(2,themeVal.length-1);
    if(themeVal==="dark")
    { 
        document.querySelector(".light-mode").classList.toggle("dark-mode");
        document.querySelector(".wrapper").classList.toggle('dark-theme');
        document.querySelector(".pic").classList.toggle('inverted');
    } 
})

window.addEventListener("scroll",()=>{
  document.querySelector(".top").classList.toggle("top-active",window.scrollY>500);
})