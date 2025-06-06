const IMG = document.getElementById('imagen')
const NOMBRE = document.getElementById('nombreImagen')
const RUTA = './img/'
const imagenes = [
  'barcelona.png',
  'estambul.png',
  'kuala lumpur.png',
  'londres.png',
  'new york.png',
  'oporto.png',
  'paris.png',
  'rio de janeiro.png',
  'sidney.png'
]
const nombres = [
  'Barcelona',
  'Estambul',
  'Kuala Lumpur',
  'Londres',
  'New York',
  'Oporto',
  'Paris',
  'Rio de Janeiro',
  'Sidney'
]

let posicion = -1

function mostrarImagen() {
  const imagen = RUTA + imagenes[posicion]
  IMG.src = imagen
  NOMBRE.innerHTML = nombres[posicion]
  NOMBRE.style.fontSize = '2.5em'
  NOMBRE.style.color = '#B8860B'
  IMG.style.borderRadius = '10px'
}

function avanza() {
  if (posicion < imagenes.length - 1) {
    posicion++
    mostrarImagen()
  } else {
    alert('Es la última imagen')
  }
}

function retrocede() {
  if (posicion > 0) {
    posicion--
    mostrarImagen()
  } else {
    alert('Es la primera imagen')
  }
}

function recargar() {
  location.reload()
}
