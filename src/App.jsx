import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import CarritoResumen from "./components/CarritoResumen";
import { productos } from "./data/productos";

function App() {
  // ---------------------------------------------------------------
  // EJERCICIO 1 (useState): el carrito está fijo en un arreglo vacío.
  // Reemplaza esta línea por un estado reactivo con useState.
  // ---------------------------------------------------------------
  const carrito = [];

  const [busqueda, setBusqueda] = useState("");

  function handleAgregarAlCarrito(producto) {
    // ---------------------------------------------------------------
    // EJERCICIO 1 (useState): agrega 'producto' al arreglo 'carrito'
    // usando la función set que obtengas de useState.
    // Pista: no mutes el arreglo original, crea uno nuevo.
    // ---------------------------------------------------------------
    console.log("TODO: agregar al carrito ->", producto.nombre);
  }

  // ---------------------------------------------------------------
  // EJERCICIO 3 (useEffect): aquí debes sincronizar document.title
  // con la cantidad de productos en el carrito.
  // Ejemplo esperado: "(2) Mini Tienda Reactiva"
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // EJERCICIO 4 (Zustand): una vez que los Ejercicios 1 y 3 ya
  // funcionan, continúa aquí. Vas a mover 'carrito' fuera de este
  // componente hacia el store de Zustand (src/store/useCarritoStore)
  // para que otros componentes (como Navbar) puedan leerlo sin que
  // App se lo pase por props.
  //
  // Pasos:
  //   1. Importa useCarritoStore desde "./store/useCarritoStore"
  //      y Navbar desde "./components/Navbar".
  //   2. Borra el useState de 'carrito' (deja solo 'busqueda').
  //   3. Reemplázalo por dos selectores del store:
  //        const items = useCarritoStore((state) => state.items);
  //        const agregarItem = useCarritoStore((state) => state.agregarItem);
  //   4. Cambia handleAgregarAlCarrito para llamar a agregarItem(producto).
  //   5. Actualiza el useEffect del Ejercicio 3 para depender de [items]
  //      en vez de [carrito].
  //   6. En el render: reemplaza el <header> por <Navbar />, y quita
  //      la prop carrito={...} al usar <CarritoResumen /> (ese
  //      componente va a leer el store directamente en este mismo
  //      ejercicio).
  // ---------------------------------------------------------------

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini Tienda Reactiva</h1>
        <span className="carrito-badge">🛒 {carrito.length}</span>
      </header>
      <main>
        <ListaProductos
          productos={productos}
          busqueda={busqueda}
          onBusquedaChange={setBusqueda}
          onAgregar={handleAgregarAlCarrito}
        />
        <CarritoResumen carrito={carrito} />
      </main>
    </div>
  );
}

export default App;
