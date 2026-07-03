
// MENU LATERAL
function toggleMenu(){
  document.getElementById('sidebar').classList.toggle('open');
}

// MAPA DE BUSQUEDA
const pages = {
  'acerca':'acerca.html',
  'mision':'mision.html',
  'vision':'mision.html',
  'objetivo':'mision.html',
  'titular':'titular.html',
  'contacto':'contacto.html',
  'oferta':'oferta.html',
  'noticias':'noticias.html',
  'avisos':'noticias.html',
  'politicas':'politicas.html',
  'reglamentos':'politicas.html',
  'juan aldama':'index.html',
  'escuela':'acerca.html',
  'imagenes':'galeria.html',
  'historia':'historia.html',
  'infraestructura':'infraestructura.html',
  'eventos':'eventos.html',
  'docentes':'docentes.html',
  'participacion':'participacion.html',
  'comunidad':'participacion.html'
};

// BUSCAR
function buscar(){
  let q = document.getElementById('buscar').value.toLowerCase().trim();

  if(!q){
    alert('Escribe algo');
    return;
  }

  let best = null;

  for(let k in pages){
    if(q.includes(k)){
      best = pages[k];
      break;
    }
  }

  if(best){
    window.location.href = best;
  }else{
    alert('No encontrado. Prueba: noticias, contacto, historia, oferta');
  }
}

// ABRIR IMAGEN
function openImg(src){
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.add("show");
}

// CERRAR IMAGEN
function closeImg(){
  document.getElementById("lightbox").classList.remove("show");
}
// Apartado de noticias y eventos
//En este apartado agregar noticias o eventos
const noticiasData = [
  {
    tipo: "evento",
    titulo: "Reunión de padres de familia",
    fecha: "5 Julio 2026",
    texto: "Se realizará en el segundo salon a las 10:00 am."
  },
  {
    tipo: "evento",
    titulo: "Ceremonia de fin de curso.",
    fecha: "18 Julio 2026",
    texto: "Se realizará en la explanada a las 10:00 am."
  },
  {
    tipo: "noticia",
    titulo: "Inicio del ciclo escolar 2026",
    fecha: "1 de septiembre 2026",
    texto: "Se da inicio al nuevo ciclo escolar con actividades de bienvenida."
  },
];

const newsContainer = document.getElementById("news-container");

function renderNews(filtro){
  newsContainer.innerHTML = "";

  noticiasData
    .filter(item => filtro === "todas" || item.tipo === filtro)
    .forEach(item => {

      newsContainer.innerHTML += `
        <div class="news-item">
          <span class="news-badge">${item.tipo.toUpperCase()}</span>
          <h3>${item.titulo}</h3>
          <small>${item.fecha}</small>
          <p>${item.texto}</p>
        </div>
      `;
    });
}

function filtrar(tipo){
  renderNews(tipo);
}

renderNews("todas");