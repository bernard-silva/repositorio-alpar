// MENU NAVBAR RESPONSIVE WITH HAMBURGUER
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const linkAbout = document.getElementById("link_about")
const linkSkills = document.getElementById("link_skills")
const linkPortfolio = document.getElementById("link_portfolio")
const linkHobbies = document.getElementById("link_hobbies")

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
linkAbout.addEventListener("click", () => nav.classList.toggle("active"));
linkSkills.addEventListener("click", () => nav.classList.toggle("active"));
linkPortfolio.addEventListener("click", () => nav.classList.toggle("active"));
linkHobbies.addEventListener("click", () => nav.classList.toggle("active"));
