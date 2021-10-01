
const header=document.querySelector(".header");

const nav=document.querySelector(".nav");
const navToggleBtn=document.querySelector(".nav-toggle-btn");
  const aboutImageBox=document.querySelector(".about-image-box");
  const allNavLinks=document.querySelectorAll(".nav-item a");
  const aboutTextBox=document.querySelector(".about-details");
  let rate=0.2;
  const isMobile=window.matchMedia("(max-width:728px)");
  let parallaxMinMedia=window.matchMedia("(min-width:820px)");
  const ElemsToAnimate=Array.from(document.querySelectorAll("[data-animate]"));
  
  
  function NavLinksFunc(){
    toggleMobileNav();
  }
  function toggleMobileNav(){
    if(!isMobile.matches) return;
    navToggleBtn.classList.toggle("active");
    if(nav.classList.contains("open-nav")){
      nav.classList.remove("open-nav");
    }
    else{
      nav.classList.add("open-nav");
    }
  }
  
  
  function ScrollEvent(){
    Parallax();
    AnimateOnScroll();
    addFixedHeader();
  }
 
function Parallax(){
  if(!parallaxMinMedia.matches) return;
    const posX=window.pageYOffset * rate;
    const posY=window.pageYOffset * (-rate);
 if(posX > 80 ) { aboutImageBox.style.opacity=0.3; aboutTextBox.style.opacity=0.3} 
 else{ aboutImageBox.style.opacity=1;
   aboutTextBox.style.opacity=1;
 }
    aboutImageBox.style.transform=`translate(${posX}px,${posY}px)`;

    aboutTextBox.style.transform=`translate(-${posX}px,${posY}px)`
  }
  function addFixedHeader(){
    if(window.scrollY > 90){
      header.classList.add("fixed-header");
    }
    else{
  header.classList.remove("fixed-header");

    }
  }
  
  function AnimateOnScroll(){
   ElemsToAnimate.map((ElemToAnimate)=>{
          const startAnimateAt=(window.pageYOffset + window.innerHeight) - ElemToAnimate.offsetHeight / 4;
    const ElemBottom= ElemToAnimate.offsetTop + ElemToAnimate.offsetHeight;
    const isPartlyShown= startAnimateAt > ElemToAnimate.offsetTop;
    const isNotScrolledPassed= window.scrollY < ElemBottom;
    if(isPartlyShown && isNotScrolledPassed){
      ElemToAnimate.classList.add("animate");
    }
    else{
    ElemToAnimate.classList.remove("animate");

    }
    });

  }
  
  
function debounce(func,wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
}
allNavLinks.forEach(navLink=>  navLink.addEventListener("click",debounce(NavLinksFunc,20)));
  window.onload=function(){
    AnimateOnScroll()
  }
  navToggleBtn.addEventListener("click",debounce(toggleMobileNav,20));
  window.addEventListener("scroll",debounce(ScrollEvent,20));