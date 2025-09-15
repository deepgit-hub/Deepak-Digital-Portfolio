// Typewriter effect
const text = "Hi, I'm Deepak L";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);
  }
}
window.onload = typeWriter;

// Carousel functionality
const carousel = document.getElementById("achievements-carousel");
document.getElementById("nextBtn").addEventListener("click", () => {
  carousel.scrollBy({ left: 320, behavior: "smooth" });
});
document.getElementById("prevBtn").addEventListener("click", () => {
  carousel.scrollBy({ left: -320, behavior: "smooth" });
});

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Section fade-in on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
      sec.style.transition = "all 1s ease-out";
    }
  });
});
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
});

// Neon border animation
setInterval(() => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.boxShadow = `0 0 15px hsl(${Math.random()*360},100%,50%)`;
  });
}, 2000);
