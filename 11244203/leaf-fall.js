const container = document.getElementById("leaves-container");

function createLeaf() {
  const leaf = document.createElement("img");
  leaf.src = "IMG/2025-10-21 170856 (1).png";
  leaf.classList.add("leaf");
  leaf.style.left = Math.random() * window.innerWidth + "px";
  leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
  leaf.style.opacity = Math.random();
  container.appendChild(leaf);

  setTimeout(() => leaf.remove(), 8000);
}

setInterval(createLeaf, 500);



