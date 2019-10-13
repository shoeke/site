
function revealMore() {
    var revealList = document.getElementById("reveal-list");
    var textToggle = document.getElementById("rm-tog");
    var faqHero = document.getElementById("faq-hero");
    if (revealList.style.display === "none") {
        revealList.style.display = "block";
        textToggle.innerHTML = "View Less";
        if (window.matchMedia("(max-width: 885px)").matches) { // If media query matches
            faqHero.style.display = "none";
          } else {
            faqHero.style.display = "block";
          }
       
    } else {
        revealList.style.display = "none";
        textToggle.innerHTML = "Read More";
        faqHero.style.display = "block";    
    }
    
  }