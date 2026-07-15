import React, { useState } from 'react';

// 1. Separamos los datos del componente. 
// (Si mañana son muchos, podés llevar este arreglo a un archivo data.js y exportarlo)
const serviciosEstrella = [
  {
    id: 1,
    title: 'Venus Legacy Facial 🌸',
    shortDesc: 'Piel más firme y luminosa con tecnología de alta gama.',
    imgSrc: '/Facial.jpg',
    duration: '1 hora',
    price: '$28.000',
    description: `MANTENÉ TU PIEL SIN ARRUGAS TODO EL AÑO
✨ Piel más firme, luminosa e hidratada

✔️ Venus Legacy
✔️ Punta de Diamante
✔️ Máscara Facial Nutritiva

💎 BENEFICIOS
• Estimula colágeno y elastina
• Reafirma y tonifica la piel
• Atenúa líneas de expresión
• Mejora la textura y luminosidad
• Hidratación profunda y efecto glow`
  },
  {
    id: 2,
    title: 'Presoterapia ✨',
    shortDesc: 'Desinflamación y drenaje linfático con anteojos de relajación.',
    imgSrc: '/Presoterapia.jpg',
    duration: '40 min',
    price: '$33.000',
    description: `Sentí tus piernas más livianas y tu cuerpo más desinflamado desde la primera sesión.

La presoterapia es un tratamiento no invasivo que utiliza presión de aire secuencial para estimular el sistema linfático y mejorar la circulación.

🩷Beneficios:
✔️ Reduce la retención de líquidos
✔️ Favorece el drenaje linfático
✔️ Disminuye la sensación de piernas cansadas
✔️ Ayuda a mejorar la celulitis
✔️ Colabora en la eliminación de toxinas
✔️ Genera una agradable sensación de bienestar y relajación.
💝 Regalito sesión incorpora anteojos de relajación con presión Barométrica y música que armonizan tus momentos.

🌿 Regalate un momento para vos y disfrutá de todos sus beneficios.`
  },
  {
    id: 3,
    title: 'Limpieza Profunda',
    shortDesc: 'Renová tu piel con punta de diamante y activos específicos.',
    imgSrc: '/Limpieza.jpg',
    duration: '60-90 min',
    price: 'Consultar',
    description: `✨ Renová tu piel y devolvele su luminosidad natural.

✔️ Limpieza profunda y extracción de comedones
✔️ Peeling y exfoliación con punta de diamante
✔️ Cabina LED y activos específicos para tu piel
✔️ Hidratación, nutrición y revitalización facial
✔️ Ayuda a minimizar poros visibles y mejorar la textura

🌿 Tratamiento personalizado según las necesidades de cada piel.
⏱️ Duración: 60 a 90 minutos
💆‍♀️ Ideal para lucir una piel más limpia, fresca, luminosa y saludable.`
  },
  {
    id: 4,
    title: 'Venus Legacy Corporal 🌟',
    shortDesc: 'Tratamiento no invasivo para un cuerpo más estilizado y esculpido.',
    imgSrc: '/LegacyCorporal.jpg', 
    duration: 'Consultar',
    price: 'Consultar',
    description: `Redefiní tu figura con tecnología de vanguardia.

Venus Legacy™ utiliza radiofrecuencia multipolar y campos electromagnéticos pulsados para aplicar calor por debajo de la superficie de la piel. 

💎 BENEFICIOS:
• Estimula la formación natural de colágeno y elastina
• Reduce el volumen de las células adiposas
• Disminuye visiblemente la celulitis
• Succión pulsada VariPulse™ para mayor profundidad y eficacia
• Piel más tensa y cuerpo esculpido`
  },
  {
    id: 5,
    title: 'Dermaplaning ✨',
    shortDesc: 'Exfoliación profunda para una piel renovada y luminosa.',
    imgSrc: '/Dermaplaning.jpg',
    duration: '1 a 1.5 horas',
    price: 'Consultar',
    description: `Un respiro de frescura y luminosidad para tu rostro.

Es un método de exfoliación físico que consiste en producir un raspado suave sin generar lesiones.

💎 BENEFICIOS:
• Elimina células muertas promoviendo el recambio celular
• Genera una luminosidad inmediata
• Mejora significativamente la penetración de cosméticos
• Elimina vellos superficiales sin engrosarlos`
  },
  {
    id: 6,
    title: 'Dermapen 🖋️',
    shortDesc: 'El "lápiz anti-imperfecciones" para restaurar tu piel.',
    imgSrc: '/Dermapen.jpg',
    duration: '30 min aprox',
    price: 'Consultar',
    description: `Restaurá la juventud y textura de tu dermis.

Conocido como el "lápiz borra imperfecciones", este tratamiento de micropunción restaura el colágeno y la elastina mediante microagujas indoloras.

💎 BENEFICIOS:
• Estimula el colágeno autólogo y la elastina
• Elimina arrugas y líneas finas
• Atenúa marcas, estrías o cicatrices
• Rápida curación y sin efectos secundarios`
  },
  {
    id: 7,
    title: 'Mio-up (Starbenne) 💪',
    shortDesc: 'Contractor muscular para tonificar y reducir adiposidad.',
    imgSrc: '/MioUp.jpg',
    duration: 'Consultar',
    price: 'Consultar',
    description: `Tonificación muscular avanzada.

Este equipo genera pulsos electromagnéticos que desencadenan contracciones musculares profundas, imposibles de lograr con ejercicio convencional.

💎 BENEFICIOS:
• Favorece la eliminación progresiva de adiposidad localizada
• Aumenta y tonifica las fibras musculares
• Ideal para abdomen, glúteos, muslos y brazos`
  },
  {
    id: 8,
    title: 'Masajes Relajantes 🌿',
    shortDesc: 'Un momento pleno de relajación para tu cuerpo y mente.',
    imgSrc: '/Masajes.jpg',
    duration: 'Consultar',
    price: 'Consultar',
    description: `Desconectá de la rutina y aliviá tensiones.

Constan de una sesión de maniobras relajantes corporales diseñadas para liberar el estrés acumulado.

💎 BENEFICIOS:
• Utilización de aceites y activos esenciales
• Aporta gran suavidad en la textura de la piel
• Induce a un estado de paz y relajación profunda`
  }
];

const Servicios = ({ onSelectService }) => {
  // Estado para controlar si mostramos todos o solo 4
  const [mostrarTodos, setMostrarTodos] = useState(false);

  // Lógica para recortar el arreglo dependiendo del estado
  const serviciosAMostrar = mostrarTodos ? serviciosEstrella : serviciosEstrella.slice(0, 4);

  return (
    <section id="servicios" className="container py-5">
      <h2 className="vero-title text-center mb-5">Servicios</h2>
      
      <div className="row g-4">
        {/* Usamos la variable serviciosAMostrar en lugar de todo el arreglo */}
        {serviciosAMostrar.map((servicio) => (
          <div className="col-md-3" key={servicio.id}>
            <div className="card vero-card h-100">
              <img 
                src={servicio.imgSrc} 
                className="card-img-top" 
                alt={servicio.title} 
                style={{height: '350px', objectFit: 'cover', borderRadius: '20px 20px 0 0'}} 
              />
              <div className="p-4 d-flex flex-column h-100">
                <h3 className="vero-title h4">{servicio.title}</h3>
                <p>{servicio.shortDesc}</p>
                <p className="fw-bold mt-auto mb-3">Duración: {servicio.duration} | {servicio.price}</p>
                <button 
                  className="btn vero-btn-nude w-100 mt-auto" 
                  onClick={() => onSelectService(servicio)} 
                >
                  Mas información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón para alternar la vista (aparece centrado abajo de las tarjetas) */}
      <div className="text-center mt-5">
        <button 
          className="btn vero-btn-nude px-5 py-2" 
          onClick={() => setMostrarTodos(!mostrarTodos)}
        >
          {mostrarTodos ? 'Ver menos' : 'Ver todos los servicios'}
        </button>
      </div>

    </section>
  );
};

export default Servicios;