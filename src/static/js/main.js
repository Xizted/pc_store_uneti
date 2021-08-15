const init = (() => {
  /*====================================
     Ocultar Preloader
  ====================================*/

  // Agregamos un evento al objeto window, que cuando cargue toda la pagina (HTML, CSS, Javascript, Images, Video)
  // Ejecute una funcion
  window.onload = () => {
    // Obtetenemos el preloader desde el document desde su ID
    const preloader = document.querySelector('#preloader');
    // Obtenemos el body desde el document
    const body = document.body;
    // Añadimos la clase animate para hacer una animacion cuando termine de carga la pagina
    preloader.classList.add('animate__animated', 'animate__fadeInOut');
    // Esperamos dos segundos
    setTimeout(() => {
      // Se añadira la clase d-none al preloader el cual sirve para ocultar un elemento del HTML
      preloader.classList.add('d-none');
      // Quitamos la clase overflow-hidden
      body.classList.remove('overflow-hidden');
      // Inicializamos la libreria WOW.js
      new WOW().init();
    }, 2000);
  };
})();
