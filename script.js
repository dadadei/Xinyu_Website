function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector("#text");
  const text = "Xinyu Zhang"; 
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(type, 150); 
    }
  }

  type(); 
});
