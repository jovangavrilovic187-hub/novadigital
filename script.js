// Sakrij loader kad se stranica učita
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Animacija kartica i testimonials prilikom scroll-a
const cards = document.querySelectorAll(".card");
const testimonials = document.querySelectorAll(".testimonial");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    // Services kartice
    cards.forEach(card => {
        if(card.getBoundingClientRect().top < trigger){
            card.classList.add("show");
        }
    });

    // Testimonials
    testimonials.forEach(t => {
        if(t.getBoundingClientRect().top < trigger){
            t.classList.add("show");
        }
    });
});
