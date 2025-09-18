const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen? "ri-close-line" : "ri-menu-line")

});

navlinks.addEventListener("click" , (e) =>{
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");

});

const scrollRevealOption = {
    orignal: "bottom",
    distance: "50px",
    duration: 1000,

};

ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,

});

ScrollReveal().reveal(".header_container form",{
    ...scrollRevealOption,
    delay: 500
});

ScrollReveal().reveal(".header_container img",{
    ...scrollRevealOption,
    delay:1000
});

ScrollReveal().reveal(".range_card",{
    duration: 1000,
    interval: 500, 
});

ScrollReveal().reveal(".location_image img",{
    ...scrollRevealOption,
   origin: "right",
});

ScrollReveal().reveal(".location_content  .section_header",{
    ...scrollRevealOption,
   delay: 500,
});

ScrollReveal().reveal(".location_content p",{
    ...scrollRevealOption,
   delay: 1000,
});

ScrollReveal().reveal(".location_content location_btn",{
    ...scrollRevealOption,
   delay: 1500,
}); 

const selectcards = document.querySelectorAll(".select_card"); 
selectcards[0].classList.add("show_info");


const price  = ["225" , "455" , "275", "625" , "395"];

 const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];
    selectCards.forEach((item) => {
      item.classList.remove("show__info");
    });
    selectCards[index].classList.add("show__info");
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
});

ScrollReveal().reveal(".story_card",{
    ...scrollRevealOption,
   interval: 500,
}); 

const banner = document.querySelector(".banner__Wrapper");

const bannerContent = Array.from(banner.childer);

bannerContent.forEach(item => {
  const duplicateNode = item . cloneNode(true)
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);

})

ScrollReveal().reveal(".download_image img",{
    ...scrollRevealOption,
   origin: "right",
}); 

ScrollReveal().reveal(".download__content  .section_header",{
    ...scrollRevealOption,
   delay: 500,
});

ScrollReveal().reveal(".download__links",{
    ...scrollRevealOption,
   delay: 1000,
});