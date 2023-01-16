// Active nav on scroll 

const sections = document.querySelectorAll("section");
console.log(sections)
const navLi=document.querySelectorAll("header nav ul li ");
console.log("nav=>",navLi)

window.addEventListener("scroll",()=>{
  console.log(window.pageYOffset)
  let curr=""
  sections.forEach((section)=>{
    const sectionTop=section.offsetTop;
    const sectionHeight=section.clientHeight;
    console.log(scrollY,"scrollY")
    if(window.pageYOffset >= (sectionTop - sectionHeight/2)){
      curr=section.getAttribute("id");
    }
  })
  console.log("curr=>",curr)

  navLi.forEach((li)=>{
    li.classList.remove("active");
    if (li.classList.contains(curr)){
      li.classList.add("active");
    }
  })
})

