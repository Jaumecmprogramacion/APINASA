// Obtener elementos
const readMoreButton = document.getElementById("read-more-mars");
const apodContainer = document.getElementById("apod-container");
const API_KEY = 'SKbLbIug1gtnOo5QAVUvjc3Ixu9L2inPySeSMx9P'; // Tu clave API de la NASA
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Función para obtener la imagen del día
async function fetchAPOD() {
  try {
    const response = await fetch(APOD_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API.');
    }
    const data = await response.json();

    // Actualiza la imagen con los datos obtenidos
    document.getElementById('apod-image').src = data.url;
    document.getElementById('apod-image').alt = data.title;
  } catch (error) {
    console.error('Error al obtener la imagen APOD:', error);
    document.getElementById('apod-image').alt = 'Hubo un error al cargar la imagen.';
  }
}

// Muestra el contenedor con la imagen cuando se hace clic en "Read More"
readMoreButton.addEventListener("click", function() {
  // Muestra el contenedor de la imagen
  apodContainer.style.display = "block";
  
  // Llama la función para obtener la imagen del día
  fetchAPOD();
});






