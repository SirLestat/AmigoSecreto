// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const agregarAmigo = () => {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("El campo no puede estar vacío");
    return;
  }

  amigos.push(nombre);
  input.value = "";

  const listaAmigos = document.getElementById("listaAmigos");
  const item = document.createElement("li");
  item.textContent = nombre;
  listaAmigos.appendChild(item);
};

const sortearAmigo = () => {
  if (amigos.length === 0) {
    alert("No hay nombres para sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const itemResultado = document.createElement("li");
  itemResultado.textContent = amigoSeleccionado;
  resultado.appendChild(itemResultado);
};
