window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    loader.style.opacity=0;
    setTimeout(()=>loader.style.display="none",500);
});

const cards=document.querySelectorAll(".card");
const testimonials=document.querySelectorAll(".testimonial");

function animateOnScroll(elements){
    const trigger=window.innerHeight*0.85;
    elements.forEach((el,i)=>{
        if(el.getBoundingClientRect().top<trigger && !el.classList.contains("show")){
            setTimeout(()=>{el.classList.add("show");}, i*150);
        }
    });
}
window.addEventListener("scroll",()=>{animateOnScroll(cards);animateOnScroll(testimonials);});
animateOnScroll(cards);
animateOnScroll(testimonials);
