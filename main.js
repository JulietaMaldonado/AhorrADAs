//DISPLAY PAGINAS//

const balancePagina = document.getElementById("balancePagina");
const categoriasPagina = document.getElementById("categoriasPagina");
const reportesPagina = document.getElementById("reportesPagina");

const balancePag = document.getElementById("balancePag");
const categoriaPag = document.getElementById("categoriaPag");
const reportesPag = document.getElementById("reportesPag");

const nuevaOp = document.getElementById("nuevaOp");
const nuevaOperacion = document.getElementById("nuevaOperacion");

balancePagina.addEventListener("click", () => {
  balancePag.style.display = "block";
  categoriaPag.style.display = "none";
  reportesPag.style.display = "none";
  nuevaOperacion.style.display = "none";
});

categoriasPagina.addEventListener("click", () => {
  balancePag.style.display = "none";
  categoriaPag.style.display = "block";
  reportesPag.style.display = "none";
  nuevaOperacion.style.display = "none";
});

reportesPagina.addEventListener("click", () => {
  balancePag.style.display = "none";
  categoriaPag.style.display = "none";
  reportesPag.style.display = "block";
  nuevaOperacion.style.display = "none";
});

nuevaOp.addEventListener("click", () => {
  balancePag.style.display = "none";
  categoriaPag.style.display = "none";
  reportesPag.style.display = "none";
  nuevaOperacion.style.display = "block";
});
/*const balancePagina = document.getElementById("balancePagina");
const categoriasPagina = document.getElementById("categoriasPagina");
const reportesPagina = document.getElementById("reportesPagina");

const balancePag = document.getElementById("balancePag");
const categoriaPag = document.getElementById("categoriaPag");
const reportesPag = document.getElementById("reportesPag");

const nuevaOp = document.getElementById("nuevaOp");
const nuevaOperacion = document.getElementById("nuevaOperacion");

balancePagina.addEventListener("click", () => {
  balancePag.style.display = "block";
  categoriaPag.style.display = "none";
  reportesPag.style.display = "none";
  nuevaOperacion.style.display = "none";
});

balancePagina();

categoriasPagina.addEventListener("click", () => {
  balancePag.style.display = "none";
  categoriaPag.style.display = "block";
  reportesPag.style.display = "none";
  nuevaOperacion.style.display = "none";
});

categoriasPagina();

reportesPagina.addEventListener("click", () => {
  balancePag.style.display = "none";
  categoriaPag.style.display = "none";
  reportesPag.style.display = "block";
  nuevaOperacion.style.display = "none";
});

reportesPagina();

nuevaOp.addEventListener("click", () => {
  nuevaOperacion.style.display = "block";
  categoriaPag.style.display = "none";
  reportesPag.style.display = "none";
  balancePag.style.display = "none";
});

nuevaOp();*/
