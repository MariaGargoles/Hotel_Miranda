const DisplayMenu = () => {
  const HamburguerButton = document.getElementById("OpenButtonMenu");
  const HamburguerMenu = document.getElementById("HambuguerMenu");

  HamburguerButton.addEventListener("click", (event) => {
    HamburguerMenu.classList.toggle(
      "NavarContainer__SecondPart__MenuDesplegable--active"
    );
    HamburguerButton.classList.toggle(
      "NavarContainer__FirstPart__MenuIcon--active"
    );
  });
};

DisplayMenu();
