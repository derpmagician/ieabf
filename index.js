const definitions = {
  coraje: {
    text: "El coraje es la fuerza mental o moral para enfrentar situaciones negativas, peligrosas o dolorosas, o para aventurarse y perseverar.",
    icon: "fa-solid fa-hand-fist",
  },
  perseverancia: {
    text: "La perseverancia es la capacidad de mantener la determinación y seguir adelante a pesar de las dificultades.",
    icon: "fa-solid fa-person-hiking",
  },
  responsabilidad: {
    text: "La responsabilidad es la obligación de cumplir con los compromisos y deberes, y de asumir las consecuencias de los propios actos.",
    icon: "fa-solid fa-calendar-check",
  },
  respeto: {
    text: "El respeto es la consideración, valoración y reconocimiento de los derechos, la dignidad y la diversidad de las personas.",
    icon: "fa-solid fa-handshake",
  },
  honestidad: {
    text: "Una persona honesta es aquella que antepone la verdad en sus pensamientos, expresiones y acciones.",
    icon: "fa-solid fa-hand-holding-heart",
  }, 
  solidaridad: {
    text: "La solidaridad implica apoyar, ayudar, proteger y respaldar a los demás, sin esperar nada a cambio.",
    icon: "fa-solid fa-person-harassing",
  },
  liderazgo: {
    text: "El liderazgo es la habilidad de guiar, influir y motivar a otros para alcanzar metas y objetivos comunes.",
    icon: "fa-solid fa-people-group",
  },
  identidad: {
    text: "La identidad es el conjunto de características y valores que definen a una persona o grupo, y que los distinguen de los demás.",
    icon: "fa-solid fa-fingerprint",
  },
  superacion: {
    text: "La superación es la capacidad de mejorar y avanzar en la vida, superando obstáculos y desafíos personales.",
    icon: "fa-solid fa-person-arrow-up-from-line",
  },
};

function toggleText(id) {
  const element = document.getElementById(id);
  const h2Element = element.querySelector("h2");
  const iconElement = element.querySelector("i");
  const originalText = id.charAt(0).toUpperCase() + id.slice(1);
  const newText = definitions[id].text;

  if (h2Element.innerText === originalText) {
    h2Element.innerText = newText;
    iconElement.style.display = "none";
  } else {
    h2Element.innerText = originalText;
    iconElement.style.display = "block";
  }
}

document
  .getElementById("imagen-colegio")
  .addEventListener("click", function () {
    document.getElementById("fullscreen-container").classList.add("active");
  });

document
  .getElementById("fullscreen-container")
  .addEventListener("click", function () {
    this.classList.remove("active");
  });
